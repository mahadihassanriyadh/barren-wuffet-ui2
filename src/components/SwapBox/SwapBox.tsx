import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
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

function isNumber(n: any): boolean {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

export function calculateAmountReceived(
  amountToSend: any,
  price: any
): number | undefined {
  if (!isNumber(price) || !isNumber(amountToSend)) return undefined;
  return amountToSend * price;
}

export function calculateAmountToSend(
  amountToReceive: any,
  price: any
): number | undefined {
  if (!isNumber(price) || !isNumber(amountToReceive)) return undefined;
  return amountToReceive / price;
}

export default function SwapBox(props: { tokens: Token[] }) {
  const spotPrice = 20;
  const amountFromAvailable = 100;
  const amountToAvailable = 20;
  const tokenOutPriceUSD = 1;
  const tokenInPriceUSD = spotPrice / tokenOutPriceUSD;

  const { tokens } = props;
  const [fromToken, setFromToken] = useState<Token | undefined>(tokens[0]);
  const [toToken, setToToken] = useState<Token | undefined>(tokens[0]);
  const [amountToSend, setAmountToSend] = useState(10);
  const [useTwap, setUseTwap] = useState(false);
  const [tradeOption, setTradeOption] = useState(TradeOptions.LIMIT);
  const [triggerPrice, setTriggerPrice] = useState<number | undefined>(
    undefined
  );
  const [limitPrice, setLimitPrice] = useState<number | undefined>(
    spotPrice * 1.05
  );
  const [trailingPercent, setTrailingPercent] = useState<number | undefined>(
    undefined
  );

  const [batchSize, setBatchSize] = useState(1);
  const [intervalSeconds, setIntervalSeconds] = useState(0); // 1 hour

  const [expiryDate, setExpiryDate] = useState(
    new Date(new Date().getTime() + 86400000 * 10)
  );

  const toPrice =
    (tradeOption === TradeOptions.LIMIT_TRIGGER && limitPrice) ||
    (tradeOption === TradeOptions.LIMIT && limitPrice) ||
    (tradeOption === TradeOptions.TRAILING_STOP &&
      (1 - (trailingPercent || 0) / 100) * (limitPrice || 0)) ||
    undefined;
  const enableToAmount = !!toPrice;
  const toAmount = calculateAmountReceived(amountToSend, toPrice);

  return (
    <div>
      <div className="mt-4 space-y-3">
        <Trans>Token In:</Trans>

        <TokenSelector
          tokens={tokens}
          selectedToken={fromToken}
          setSelectedToken={setFromToken}
        />

        <span>
          <Trans>
            {amountFromAvailable} available (${" "}
            {tokenInPriceUSD * amountFromAvailable})
          </Trans>
        </span>
      </div>
      {tradeOption !== TradeOptions.OCO && (
        <AmountToSendInput
          {...{ fromToken, amountToSend, setAmountToSend, amountFromAvailable }}
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
        <Trans>
          {amountToAvailable} available (${" "}
          {tokenOutPriceUSD * amountToAvailable})
        </Trans>
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
          price={limitPrice}
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
          onChange={(value: number) => {
            const swapAmt = calculateAmountToSend(value, toPrice);
            swapAmt && setAmountToSend(swapAmt);
          }}
        />
      )}

      <OrderExpiryInput expiryDate={expiryDate} setExpiryDate={setExpiryDate} />

      <Checkbox
        isChecked={useTwap}
        label={"Enable TWAP"}
        setIsChecked={setUseTwap}
      />
      {useTwap && (
        <TwapOptions
          {...{ batchSize, setBatchSize, intervalSeconds, setIntervalSeconds }}
        />
      )}
      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
}
