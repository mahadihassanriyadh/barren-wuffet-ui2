import React, { useEffect } from "react";
import { t, Trans } from "@lingui/macro";
import { useState } from "react";
import { Address, Token, toTokenVal } from "../../config/tokens";
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
import Error from "../ui/Error";
import { useConnectAndWrite, useFundBalance } from "../../api/rpc";
import { BigNumber as BN, BigNumberish } from "ethers";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils";
import {
  usePrepareCreateAndActivateSwapRule,
  usePrepareCreateSwapRule,
} from "../../api/trading";
import { useSushiAmountOut } from "../../api/sushi";

const pow = (decimals: number) => BN.from(10).pow(decimals);

export function calculateAmountReceived(
  tokenToSend?: Token,
  tokenToReceive?: Token,
  amountToSend?: BN,
  price?: BigNumberish
): BN | undefined {
  if (
    price === undefined ||
    tokenToSend === undefined ||
    tokenToReceive === undefined
  )
    return undefined;
  return amountToSend
    ?.mul(price)
    .mul(pow(tokenToReceive.decimals))
    .div(pow(tokenToSend.decimals));
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

export default function SwapBox({
  tokens,
  fundId,
  fromToken,
  toToken,
  setFromToken,
  setToToken,
}: {
  tokens: Token[];
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  setFromToken: (token: Token) => void;
  setToToken: (token: Token) => void;
}) {
  const tokenOutPriceUSD = 1;

  const { data: balanceFrom } = useFundBalance(fundId, fromToken?.address);
  const { data: balanceTo } = useFundBalance(fundId, toToken?.address);

  const amountFromAvailable = balanceFrom?.value;
  const amountToAvailable = balanceTo?.value;

  const [amountToSend, setAmountToSend] = useState<BN>(
    amountFromAvailable || BN.from(0)
  );

  const [useTwap, setUseTwap] = useState(false);
  const [tradeOption, setTradeOption] = useState(TradeOptions.LIMIT);
  const [triggerPrice, setTriggerPrice] = useState<number | undefined>(
    undefined
  );
  const [limitPrice, setLimitPrice] = useState<number | undefined>(undefined);
  const [trailingPercent, setTrailingPercent] = useState<number | undefined>(
    undefined
  );

  const [batchSize, setBatchSize] = useState(1);
  const [intervalSeconds, setIntervalSeconds] = useState(0); // 1 hour

  const [expiryDate, setExpiryDate] = useState(
    new Date(new Date().getTime() + 86400000 * 10)
  );

  const toAmount = useSushiAmountOut(fromToken, toToken, amountToSend);
  const spotPrice = amountToSend?.isZero()
    ? 0
    : toAmount.div(amountToSend).toNumber();

  const tokenInPriceUSD = spotPrice / tokenOutPriceUSD;

  const toPrice =
    (tradeOption === TradeOptions.LIMIT_TRIGGER && limitPrice) ||
    (tradeOption === TradeOptions.LIMIT && limitPrice) ||
    (tradeOption === TradeOptions.TRAILING_STOP &&
      (1 - (trailingPercent || 0) / 100) * (limitPrice || 0)) ||
    undefined;

  const enableToAmount = !!toPrice;

  const [isSaving, setIsSaving] = useState(false);

  const { isLoading, error, isSuccess, write } =
    usePrepareCreateAndActivateSwapRule({
      fundId,
      fromToken: fromToken,
      toToken: toToken,
      limitPrice: toTokenVal(limitPrice || toPrice || spotPrice),
      collateral: amountToSend,
      fees: BN.from(0),
    });

  useConnectAndWrite(isSaving, setIsSaving, write);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSaving(true);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4 space-y-3">
          {error && <Error error={error.message} />}
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
          <Trans>Current Price: {spotPrice}</Trans>
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
              batchSize,
              setBatchSize,
              intervalSeconds,
              setIntervalSeconds,
            }}
          />
        )}
        <div className="flex justify-center mt-10">
          <Button type="submit" label={t`Confirm`} />
        </div>
      </form>
    </div>
  );
}
