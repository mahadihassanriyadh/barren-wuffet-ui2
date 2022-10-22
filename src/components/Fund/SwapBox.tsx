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

function OCOOptions() {
  const [triggerBuyPrice, setTriggerBuyPrice] = useState(110);
  const [limitBuyPrice, setLimitBuyPrice] = useState(120);
  const [triggerSellPrice, setTriggerSellPrice] = useState(130);
  const [limitSellPrice, setLimitSellPrice] = useState(120);

  return (
    <div className="mt-4 flex flex-auto">
      <div>
        <div>
          <Trans>Buy</Trans>
        </div>
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
      </div>
      <div>
        <div>
          <Trans>Sell</Trans>
        </div>
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
      <div className="mt-4 space-y-3">
        <Input
          type="number"
          name={t`${fromToken?.name} Amount`}
          id="amountToSend"
          value={amountToSend}
          placeholder={t`Amount to send`}
          onChange={(value) =>
            setAmountToSend(Math.min(amountFromAvailable, parseFloat(value)))
          }
          required
        />
      </div>
      <Slider
        value={Math.round((amountToSend * 100) / amountFromAvailable)}
        onChange={(val) =>
          setAmountToSend(Math.round((val / 100) * amountFromAvailable))
        }
      />
      <div className="mt-4 space-y-3">
        <Trans>Token Out:</Trans>
        <TokenSelector
          tokens={tokens}
          selectedToken={toToken}
          setSelectedToken={setToToken}
        />
      </div>
      <span>
        <Trans>{amountFromAvailable} available</Trans>
      </span>
      <div>
        <Trans>Current Price: {spotPrice}</Trans>
      </div>
      <TradeOptionSelector
        selected={tradeOption}
        setSelected={setTradeOption}
      />
      {tradeOption === TradeOptions.OCO && <OCOOptions />}
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
      <div className="mt-4 space-y-3">
        {
          <Input
            type="number"
            name={t`Min. ${toToken?.name} Amount`}
            id="amountReceived"
            value={toAmount}
            placeholder={t`Min. Amount to receive`}
            onChange={(value) => {
              const swapAmt = calculateAmountToSend(parseFloat(value), toPrice);
              swapAmt && setAmountToSend(swapAmt);
            }}
            required
            disabled={!enableToAmount}
          />
        }
      </div>

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
