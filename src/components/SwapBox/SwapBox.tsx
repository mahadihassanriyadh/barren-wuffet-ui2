import React, { useEffect } from "react";
import { t, Trans } from "@lingui/macro";
import { useState } from "react";
import {
  Address,
  PRICE_DECIMALS,
  Token,
  toTokenVal,
} from "../../config/tokens";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox";
import TokenSelector from "../Form/TokenSelector";
import TradeOptionSelector from "../Fund/TradeOptionSelector";
import { TradeOptions } from "../../api/models";
import { OCOOptions } from "./OCOOptions";
import { TrailingStopOptions } from "./TrailingStopOptions";
import { LimitTriggerOptions } from "./LimitTriggerOptions";
import { OrderExpiryInput } from "./OrderExpiryInput";
import { LimitPriceInput } from "./LimitPriceInput";
import { MinAmountInput } from "./MinAmountInput";
import { AmountToSendInput } from "./AmountToSendInput";
import { TwapOptions } from "./TwapOptions";
import ErrorDisplay from "../ui/Error";
import { useConnectAndWrite, useFundBalance } from "../../api/rpc";
import { BigNumber as BN, BigNumberish } from "ethers";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils";
import {
  useFundFees,
  usePrepareCreateSwapRule,
  usePrepareSushiSwapTakeAction,
} from "../../api/trading";
import { useAmountOut } from "../../api/trading";
import { getRelativePrice, mulPrice, percentOf, pow } from "../../data/math";
import { TwapRange } from "../../api/triggers";
import { Action } from "../../config/actions";

interface WriteResponse {
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
  write?: () => void;
}

interface SaveEffects {
  isSaving: boolean;
  setIsSaving: (isSaving: boolean) => void;
  setError: (error: Error | null) => void;
  setIsLoading?: (isLoading: boolean) => void;
  setIsSuccess?: (isSuccess: boolean) => void;
}

interface SubmitBaseProps extends SaveEffects {
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  tradeOption: TradeOptions;
}

interface SubmitLimitProps extends SubmitBaseProps {
  tradeOption: TradeOptions.LIMIT;
  limitPrice: BN;
  amountToSend: BN;
}

interface SubmitLimitTriggerProps extends SubmitBaseProps {
  tradeOption: TradeOptions.LIMIT_TRIGGER;
  triggerPrice: BN;
  limitPrice: BN;
  amountToSend: BN;
  twapRange?: TwapRange;
}

export function calculateAmountReceived(
  tokenToSend?: Token,
  tokenToReceive?: Token,
  amountToSend?: BN,
  price?: BN
): BN | undefined {
  if (
    price === undefined ||
    tokenToSend === undefined ||
    tokenToReceive === undefined
  )
    return undefined;
  return (
    amountToSend &&
    mulPrice(amountToSend, price)
      .mul(pow(tokenToReceive.decimals))
      .div(pow(tokenToSend.decimals))
  );
}

export function calculateAmountToSend(
  tokenToSend?: Token,
  tokenToReceive?: Token,
  amountToReceive?: BN,
  price?: BigNumberish
): BN | undefined {
  if (
    price === undefined ||
    tokenToSend === undefined ||
    tokenToReceive === undefined
  )
    return undefined;
  return amountToReceive
    ?.mul(pow(tokenToSend.decimals))
    .div(pow(tokenToReceive.decimals))
    .div(price);
}

function useSaveEffects(props: SaveEffects & WriteResponse) {
  const {
    error,
    write,
    isLoading,
    isSuccess,
    isSaving,
    setIsSaving,
    setError,
    setIsLoading,
    setIsSuccess,
  } = props;

  useEffect(() => {
    setError(error);
  }, [error, setError]);

  useConnectAndWrite(isSaving, setIsSaving, write);

  useEffect(() => {
    setIsSuccess?.(isSuccess);
  }, [isSuccess, setIsSuccess]);

  useEffect(() => {
    setIsLoading?.(isLoading);
  }, [isLoading, setIsLoading]);
}

function SubmitLimitTrigger(props: SubmitLimitTriggerProps) {
  const {
    fundId,
    fromToken,
    toToken,
    triggerPrice,
    limitPrice,
    amountToSend,
    isSaving,
    twapRange,
    setIsSaving,
    setError,
    setIsSuccess,
    setIsLoading,
  } = props;

  const { isLoading, error, isSuccess, write }: WriteResponse =
    usePrepareCreateSwapRule({
      fundId,
      fromToken,
      toToken,
      triggerPrice,
      limitPrice,
      collateral: amountToSend,
      twapRange,
      eventCallback: ({ ruleHash }) => {
        // The listener will be called on prepare and might give old rules hashes.
        // so be careful about using this as the ruleId, or setup the listener only after write
        console.log(`Rule hash: ${ruleHash}`);
      },
    });

  useSaveEffects({
    error,
    write,
    isSaving,
    isSuccess,
    isLoading,
    setError,
    setIsSuccess,
    setIsSaving,
    setIsLoading,
  });
  return <Button type="submit" label={t`Submit Limit Order `} />;
}

function SubmitLimit(props: SubmitLimitProps) {
  const {
    fundId,
    fromToken,
    toToken,
    limitPrice,
    amountToSend,
    isSaving,
    setIsSaving,
    setError,
    setIsSuccess,
    setIsLoading,
  } = props;

  const { data: platformFees } = useFundFees(fundId);
  const managerToPlatformFeePercentage =
    platformFees?.managerToPlatformFeePercentage || BN.from(0);

  const { isLoading, error, isSuccess, write }: WriteResponse =
    usePrepareSushiSwapTakeAction({
      fundId,
      fromToken,
      toToken,
      limitPrice,
      collateral: amountToSend,
      fees: percentOf(amountToSend, managerToPlatformFeePercentage),
    });

  useSaveEffects({
    error,
    write,
    isSaving,
    isSuccess,
    isLoading,
    setError,
    setIsSuccess,
    setIsSaving,
    setIsLoading,
  });

  return <Button type="submit" label={t`Submit Limit Order `} />;
}

export default function SwapBox({
  action,
  tokens,
  fundId,
  fromToken,
  toToken,
  setFromToken,
  setToToken,
}: {
  action: Action;
  tokens: Token[];
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  setFromToken: (token: Token) => void;
  setToToken: (token: Token) => void;
}) {
  const tokenOutPriceUSD: BN = BN.from(1);

  const { data: balanceFrom } = useFundBalance(fundId, fromToken?.address);
  const { data: balanceTo } = useFundBalance(fundId, toToken?.address);

  const amountFromAvailable = balanceFrom?.value;
  const amountToAvailable = balanceTo?.value;

  const [amountToSend, setAmountToSend] = useState<BN>(
    amountFromAvailable || BN.from(0)
  );

  const [useTwap, setUseTwap] = useState(false);
  const [tradeOption, setTradeOption] = useState(TradeOptions.LIMIT);
  const [triggerPrice, setTriggerPrice] = useState<BN | undefined>(undefined);
  const [limitPrice, setLimitPrice] = useState<BN | undefined>(undefined);
  const [trailingPercent, setTrailingPercent] = useState<number | undefined>(
    undefined
  );

  const [numIntervals, setNumIntervals] = useState(1);
  const [intervalSeconds, setIntervalSeconds] = useState(0);

  const [expiryDate, setExpiryDate] = useState(
    new Date(new Date().getTime() + 86400000 * 10)
  );

  const toAmount = useAmountOut(action, fromToken, toToken, amountToSend);
  const spotPrice = amountToSend?.isZero()
    ? BN.from(0)
    : getRelativePrice(toAmount, toToken, amountToSend, fromToken);

  const tokenInPriceUSD = spotPrice.div(tokenOutPriceUSD);

  const toPrice =
    (tradeOption === TradeOptions.LIMIT_TRIGGER ? limitPrice : undefined) ||
    (tradeOption === TradeOptions.LIMIT ? limitPrice : undefined) ||
    (tradeOption === TradeOptions.TRAILING_STOP
      ? limitPrice?.mul(1 - (trailingPercent || 0) / 100)
      : undefined);

  const enableToAmount = !!toPrice;

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSaving(true);
  };

  const submitParams: SubmitBaseProps = {
    tradeOption,
    fundId,
    fromToken,
    toToken,
    isSaving,
    setIsSaving,
    setError,
  };

  const twapRange = {
    // TODO is this a good idea? how long of a buffer do we need?
    // should the first trade be set as a limit order?
    startTime: new Date().getTime(),
    numIntervals,
    gapBetweenIntervals: intervalSeconds,
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4 space-y-3">
          {error && <ErrorDisplay error={error.message} />}
          <Trans>Token In:</Trans>

          <TokenSelector
            tokens={tokens}
            selectedToken={fromToken}
            setSelectedToken={setFromToken}
          />

          <span>
            {amountFromAvailable && fromToken && (
              <Trans>
                {formatUnits(amountFromAvailable, fromToken.decimals)} available
                (${" "}
                {tokenInPriceUSD &&
                  formatUnits(
                    amountFromAvailable.mul(tokenInPriceUSD),
                    fromToken.decimals
                  )}
                )
              </Trans>
            )}
          </span>
          <span>Fees: TBD</span>
        </div>
        {tradeOption !== TradeOptions.OCO && (
          <AmountToSendInput
            {...{
              fromToken,
              amountToSend,
              setAmountToSend,
              amountFromAvailable,
            }}
          />
        )}
        <div className="mt-4 space-y-3">
          <Trans>Token Out:</Trans>
          <TokenSelector
            tokens={tokens}
            selectedToken={toToken}
            setSelectedToken={setToToken}
          />
        </div>
        <span>
          {amountToAvailable && toToken && (
            <Trans>
              {formatUnits(amountToAvailable, toToken.decimals)} available (${" "}
              {tokenOutPriceUSD &&
                formatUnits(
                  amountToAvailable.mul(tokenOutPriceUSD),
                  toToken.decimals
                )}
              )
            </Trans>
          )}
        </span>
        <div>
          <Trans>Current Price: {formatUnits(spotPrice, PRICE_DECIMALS)}</Trans>
        </div>
        <TradeOptionSelector
          selected={tradeOption}
          setSelected={setTradeOption}
        />
        {tradeOption === TradeOptions.OCO && (
          <OCOOptions
            fromToken={fromToken}
            toToken={toToken}
            price={spotPrice}
            tokenInPriceUSD={tokenInPriceUSD}
            tokenOutPriceUSD={tokenOutPriceUSD}
            amountFromAvailable={amountFromAvailable}
            amountToAvailable={amountToAvailable}
          />
        )}
        {tradeOption === TradeOptions.LIMIT_TRIGGER && (
          <LimitTriggerOptions
            triggerPrice={triggerPrice}
            setTriggerPrice={setTriggerPrice}
          />
        )}
        {tradeOption === TradeOptions.TRAILING_STOP && (
          <TrailingStopOptions
            triggerPrice={triggerPrice}
            setTriggerPrice={setTriggerPrice}
            trailingPercent={trailingPercent}
            setTrailingPercent={setTrailingPercent}
          />
        )}
        {[TradeOptions.LIMIT, TradeOptions.LIMIT_TRIGGER].includes(
          tradeOption
        ) && (
          <LimitPriceInput
            price={limitPrice || toPrice || spotPrice}
            setPrice={(val) => setLimitPrice(val)}
          />
        )}
        {tradeOption !== TradeOptions.OCO && (
          <MinAmountInput
            token={toToken}
            amount={toAmount}
            price={toPrice}
            tokenOutPriceUSD={tokenOutPriceUSD}
            isEnabled={enableToAmount}
            onChange={(value: BN) => {
              const swapAmt = calculateAmountToSend(
                fromToken,
                toToken,
                value,
                toPrice
              );
              swapAmt && setAmountToSend(swapAmt);
            }}
          />
        )}

        <OrderExpiryInput
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
        />

        <Checkbox
          isChecked={useTwap}
          label={"Enable TWAP"}
          setIsChecked={setUseTwap}
        />
        {useTwap && (
          <TwapOptions
            {...{
              numIntervals,
              setNumIntervals,
              intervalSeconds,
              setIntervalSeconds,
            }}
          />
        )}
        <div className="flex justify-center mt-10">
          {tradeOption === TradeOptions.LIMIT &&
            limitPrice &&
            (useTwap ? (
              <SubmitLimitTrigger
                {...submitParams}
                amountToSend={amountToSend}
                limitPrice={limitPrice}
                triggerPrice={limitPrice}
                tradeOption={TradeOptions.LIMIT_TRIGGER}
                twapRange={twapRange}
              />
            ) : (
              <SubmitLimit
                {...submitParams}
                amountToSend={amountToSend}
                limitPrice={limitPrice}
                tradeOption={TradeOptions.LIMIT}
              />
            ))}
          {tradeOption === TradeOptions.LIMIT_TRIGGER &&
            limitPrice &&
            triggerPrice && (
              <SubmitLimitTrigger
                {...submitParams}
                amountToSend={amountToSend}
                limitPrice={limitPrice}
                triggerPrice={triggerPrice}
                tradeOption={TradeOptions.LIMIT_TRIGGER}
                twapRange={useTwap ? twapRange : undefined}
              />
            )}
        </div>
      </form>
    </div>
  );
}
