import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox";
import { Input } from "../Form/Input";
import Selector from "../Form/Selector";
import Slider from "../Form/Slider";
import TokenSelector from "../Form/TokenSelector";
import calendarIcon from "../../img/icons/calendarYellowIcon.svg";
import TradeOptionSelector from "./TradeOptionSelector";
import { formatDate } from "../../data/formatting";
import { TradeOptions } from "../../api/models";

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
  price: number;
  tokenInPriceUSD?: number;
  tokenOutPriceUSD?: number;
  amountFromAvailable: number;
  amountToAvailable: number;
}) {
  const {
    fromToken,
    toToken,
    amountFromAvailable,
    amountToAvailable,
    price,
    tokenInPriceUSD,
    tokenOutPriceUSD,
  } = props;
  const [triggerBuyPrice, setTriggerBuyPrice] = useState(price);
  const [limitBuyPrice, setLimitBuyPrice] = useState(price * 0.9);
  const [triggerSellPrice, setTriggerSellPrice] = useState(price);
  const [limitSellPrice, setLimitSellPrice] = useState(price * 1.1);
  const [amountToSendBuy, setAmountToSendBuy] = useState(amountFromAvailable);
  const [amountToSendSell, setAmountToSendSell] = useState(amountToAvailable);

  const toBuyAmount = calculateAmountReceived(amountToSendBuy, limitBuyPrice);
  const toSellAmount = calculateAmountReceived(
    amountToSendSell,
    1 / limitSellPrice
  );
  return (
    <div className="mt-4 flex flex-auto">
      <div>
        <div>
          <Trans>Buy {toToken?.name}</Trans>
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
          tokenOutPriceUSD={tokenOutPriceUSD}
          isEnabled={true}
          onChange={(value: number) => {
            const swapAmt = calculateAmountToSend(value, limitBuyPrice);
            swapAmt && setAmountToSendBuy(swapAmt);
          }}
        />
      </div>
      <div>
        <div>
          <Trans>Or Sell {toToken?.name}</Trans>
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
          tokenOutPriceUSD={tokenInPriceUSD}
          isEnabled={true}
          onChange={(value: number) => {
            const swapAmt = calculateAmountToSend(value, 1 / limitSellPrice);
            swapAmt && setAmountToSendSell(swapAmt);
          }}
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
          value={trailingPercent || 0}
          placeholder={t`Trailing Percent`}
          onChange={(value) => setTrailingPercent(parseFloat(value))}
          required
        />
        <span>%</span>
      </div>
    </div>
  );
}

function LimitTriggerOptions(props: {
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

function OrderExpiryInput(props: {
  expiryDate: Date;
  setExpiryDate: (val: Date) => void;
}) {
  const { expiryDate, setExpiryDate } = props;
  return (
    <div className="mt-4 space-y-3">
      {
        <Input
          type="date"
          icon={calendarIcon}
          value={formatDate(expiryDate)}
          name={t`Order Expiry`}
          id="orderExpiry"
          placeholder={t`Order Expiry`}
          onChange={(value) => {
            const newDate = new Date(value);
            if (newDate.getTime() > new Date().getTime()) {
              setExpiryDate(newDate);
            }
          }}
          required
        />
      }
    </div>
  );
}

function LimitPriceInput(props: {
  price?: number;
  setPrice: (val: number) => void;
}) {
  const { price, setPrice } = props;
  return (
    <div className="mt-4 space-y-3">
      {
        <Input
          type="number"
          name={t`Limit Price`}
          id="limitPrice"
          value={price}
          placeholder={t`Limit Price`}
          onChange={(value) => setPrice(parseFloat(value))}
          required
        />
      }
    </div>
  );
}

function MinAmountInput(props: {
  token?: Token;
  amount?: number;
  price?: number;
  tokenOutPriceUSD?: number;
  isEnabled: boolean;
  onChange: (val: number) => void;
}) {
  const { token, amount, tokenOutPriceUSD, isEnabled, onChange } = props;
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Min. ${token?.name} Amount`}
        id="amountReceived"
        value={amount}
        placeholder={t`Min. Amount to receive`}
        onChange={(value) => onChange(parseFloat(value))}
        required
        disabled={!isEnabled}
      />
      <span>$ {(tokenOutPriceUSD || 0) * (amount || 0)}</span>
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
      {useTwap && <TwapOptions />}
      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
}
