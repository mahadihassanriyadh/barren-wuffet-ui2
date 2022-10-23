import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
import Button from "../Form/Button";
import Checkbox from "../Form/Checkbox";
import { Input } from "../Form/Input";
import Selector from "../Form/Selector";
import Slider from "../Form/Slider";
import TokenSelector from "../Form/TokenSelector";
import TradeOptionSelector, { TradeOptions } from "./TradeOptionSelector";

const twapIntervals = ["Min", "Hour", "Day"];

function TwapOptions() {
  const [batchSize, setBatchSize] = useState(0.25);
  const [interval, setInterval] = useState(60 * 60); // 1 hour

  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Batch Size`}
        id="batchSize"
        value={batchSize * 100}
        placeholder={t`Batch Size`}
        onChange={(value) => setBatchSize(parseFloat(value) / 100)}
        required
      />
      %
      <Selector
        items={twapIntervals.map((i) => ({ name: i }))}
        selectedItem={{ name: twapIntervals[0] }}
        setSelectedItem={(item) => console.log(item)}
      />
      <Input
        type="number"
        name={t`Interval`}
        id="interval"
        value={interval / 60}
        placeholder={t`Interval`}
        onChange={(value) => setInterval(parseFloat(value) * 60)} // need to adjust based on selector
        required
      />
      <Trans>Estimated Completion: {interval / batchSize / 60} minutes</Trans>
    </div>
  );
}

function OCOOptions(props: {
  fromToken?: Token;
  toToken?: Token;
  amountFromAvailable: number;
  amountToAvailable: number;
}) {
  const { fromToken, toToken, amountFromAvailable, amountToAvailable } = props;
  const [triggerBuyPrice, setTriggerBuyPrice] = useState(110);
  const [limitBuyPrice, setLimitBuyPrice] = useState(120);
  const [triggerSellPrice, setTriggerSellPrice] = useState(130);
  const [limitSellPrice, setLimitSellPrice] = useState(120);
  const [amountToSendBuy, setAmountToSendBuy] = useState(10);
  const [amountToSendSell, setAmountToSendSell] = useState(10);

  const toBuyAmount = calculateAmountReceived(amountToSendBuy, limitBuyPrice);
  const toSellAmount = calculateAmountReceived(
    amountToSendSell,
    limitSellPrice
  );
  return (
    <div className="mt-4 flex flex-auto">
      <div>
        <div>
          <Trans>Buy</Trans>
        </div>
        <AmountToSendInput
          fromToken={fromToken}
          amountFromAvailable={amountFromAvailable}
          setAmountToSend={setAmountToSendBuy}
          amountToSend={amountToSendBuy}
        />
        <Input
          type="number"
          name={t`Trigger Price`}
          id="triggerBuyPrice"
          value={triggerBuyPrice}
          placeholder={t`Trigger Buy Price`}
          onChange={(value) => setTriggerBuyPrice(parseFloat(value))}
          required
        />
        <Input
          type="number"
          name={t`Limit Price`}
          id="limitBuyPrice"
          value={limitBuyPrice}
          placeholder={t`Limit Buy Price`}
          onChange={(value) => setLimitBuyPrice(parseFloat(value))}
          required
        />
        <MinAmountInput
          token={fromToken}
          amount={toBuyAmount}
          price={limitBuyPrice}
          isEnabled={true}
          setAmountToSend={setAmountToSendBuy}
        />
      </div>
      <div>
        <div>
          <Trans>Or Sell</Trans>
        </div>
        <AmountToSendInput
          fromToken={toToken}
          amountFromAvailable={amountToAvailable}
          setAmountToSend={setAmountToSendSell}
          amountToSend={amountToSendSell}
        />
        <Input
          type="number"
          name={t`Trigger Price`}
          id="triggerSellPrice"
          value={triggerSellPrice}
          placeholder={t`Trigger Sell Price`}
          onChange={(value) => setTriggerSellPrice(parseFloat(value))}
          required
        />
        <Input
          type="number"
          name={t`Limit Price`}
          id="limitSellPrice"
          value={limitSellPrice}
          placeholder={t`Limit Sell Price`}
          onChange={(value) => setLimitSellPrice(parseFloat(value))}
          required
        />
        <MinAmountInput
          token={toToken}
          amount={toSellAmount}
          price={limitSellPrice}
          isEnabled={true}
          setAmountToSend={setAmountToSendSell}
        />
      </div>
    </div>
  );
}

function TrailingStopOptions(props: {
  triggerPrice: number | undefined;
  trailingPercent: number | undefined;
  setTriggerPrice: (val: number) => void;
  setTrailingPercent: (val: number) => void;
}) {
  const { triggerPrice, setTriggerPrice, trailingPercent, setTrailingPercent } =
    props;
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Trigger Price`}
        id="triggerPrice"
        value={triggerPrice}
        placeholder={t`Trigger Price`}
        onChange={(value) => setTriggerPrice(parseFloat(value))}
        required
      />
      <div>
        <Input
          type="number"
          name={t`Trailing Percent`}
          id="trailingPercent"
          value={(trailingPercent || 0) * 100}
          placeholder={t`Trailing Percent`}
          onChange={(value) => setTrailingPercent(parseFloat(value) / 100)}
          required
        />
        <span>%</span>
      </div>
    </div>
  );
}

function MarketTriggerOptions(props: {
  triggerPrice: number | undefined;
  setTriggerPrice: (val: number) => void;
}) {
  const { triggerPrice, setTriggerPrice } = props;
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Trigger Price`}
        id="triggerPrice"
        value={triggerPrice}
        placeholder={t`Trigger Price`}
        onChange={(value) => setTriggerPrice(parseFloat(value))}
        required
      />
    </div>
  );
}

function MinAmountInput(props: {
  token?: Token;
  amount?: number;
  price?: number;
  isEnabled: boolean;
  setAmountToSend: (val: number) => void;
}) {
  const { token, amount, price, isEnabled, setAmountToSend } = props;
  return (
    <div className="mt-4 space-y-3">
      {
        <Input
          type="number"
          name={t`Min. ${token?.name} Amount`}
          id="amountReceived"
          value={amount}
          placeholder={t`Min. Amount to receive`}
          onChange={(value) => {
            const swapAmt = calculateAmountToSend(parseFloat(value), price);
            swapAmt && setAmountToSend(swapAmt);
          }}
          required
          disabled={!isEnabled}
        />
      }
    </div>
  );
}

function AmountToSendInput(props: {
  fromToken?: Token;
  amountToSend?: number;
  setAmountToSend: (val: number) => void;
  amountFromAvailable?: number;
}) {
  const { fromToken, amountToSend, setAmountToSend, amountFromAvailable } =
    props;

  const sliderVal =
    (amountToSend &&
      amountFromAvailable &&
      Math.round((amountToSend * 100) / amountFromAvailable)) ||
    0;
  return (
    <div>
      <div className="mt-4 space-y-3">
        <Input
          type="number"
          name={t`${fromToken?.name} Amount`}
          id="amountToSend"
          value={amountToSend}
          placeholder={t`Amount to send`}
          onChange={(value) =>
            amountFromAvailable &&
            setAmountToSend(Math.min(amountFromAvailable, parseFloat(value)))
          }
          required
        />
      </div>
      <Slider
        value={sliderVal}
        onChange={(val) =>
          amountFromAvailable &&
          setAmountToSend(Math.round((val / 100) * amountFromAvailable))
        }
      />
    </div>
  );
}
function isNumber(n: any): boolean {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function calculateAmountReceived(
  amountToSend: any,
  price: any
): number | undefined {
  if (!isNumber(price) || !isNumber(amountToSend)) return undefined;
  return amountToSend * price;
}

function calculateAmountToSend(
  amountToReceive: any,
  price: any
): number | undefined {
  if (!isNumber(price) || !isNumber(amountToReceive)) return undefined;
  return amountToReceive / price;
}

export default function SwapBox(props: { tokens: Token[] }) {
  const { tokens } = props;
  const [fromToken, setFromToken] = useState<Token | undefined>(tokens[0]);
  const [toToken, setToToken] = useState<Token | undefined>(tokens[0]);
  const [amountToSend, setAmountToSend] = useState(10);
  const [useTwap, setUseTwap] = useState(false);
  const [tradeOption, setTradeOption] = useState(TradeOptions.SPOT);
  const [triggerPrice, setTriggerPrice] = useState<number | undefined>(
    undefined
  );
  const [trailingPercent, setTrailingPercent] = useState<number | undefined>(
    undefined
  );
  const amountFromAvailable = 100;
  const amountToAvailable = 20;

  const spotPrice = 20;

  const toPrice =
    (tradeOption === TradeOptions.MARKET_TRIGGER && triggerPrice) ||
    (tradeOption === TradeOptions.SPOT && spotPrice) ||
    (tradeOption === TradeOptions.TRAILING_STOP &&
      trailingPercent &&
      (1 - trailingPercent) * spotPrice) ||
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
          <Trans>{amountFromAvailable} available</Trans>
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
        <Trans>{amountToAvailable} available</Trans>
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
          amountFromAvailable={amountFromAvailable}
          amountToAvailable={amountToAvailable}
        />
      )}
      {tradeOption === TradeOptions.MARKET_TRIGGER && (
        <MarketTriggerOptions
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
      {tradeOption !== TradeOptions.OCO && (
        <MinAmountInput
          token={toToken}
          amount={toAmount}
          price={toPrice}
          isEnabled={enableToAmount}
          setAmountToSend={setAmountToSend}
        />
      )}

      <Checkbox
        isChecked={useTwap}
        label={"Enable TWAP"}
        setIsChecked={setUseTwap}
      />
      {useTwap && <TwapOptions />}
      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
}
