import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
import { Input } from "../Form/Input";
import { calculateAmountReceived, calculateAmountToSend } from "./SwapBox";
import { AmountToSendInput } from "./AmountToSendInput";
import { MinAmountInput } from "./MinAmountInput";

export function OCOOptions(props: {
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
          onChange={(value) => setTriggerBuyPrice(value)}
          required
        />
        <Input
          type="number"
          name={t`Limit Price`}
          id="limitBuyPrice"
          value={limitBuyPrice}
          placeholder={t`Limit Buy Price`}
          onChange={(value) => setLimitBuyPrice(value)}
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
          onChange={(value) => setTriggerSellPrice(value)}
          required
        />
        <Input
          type="number"
          name={t`Limit Price`}
          id="limitSellPrice"
          value={limitSellPrice}
          placeholder={t`Limit Sell Price`}
          onChange={(value) => setLimitSellPrice(value)}
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
