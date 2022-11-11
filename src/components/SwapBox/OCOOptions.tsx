import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { PRICE_DECIMALS, Token } from "../../config/tokens";
import { Input } from "../Form/Input";
import { calculateAmountReceived, calculateAmountToSend } from "./SwapBox";
import { AmountToSendInput } from "./AmountToSendInput";
import { MinAmountInput } from "./MinAmountInput";
import { BigNumber as BN } from "ethers";
import { parseUnits } from "ethers/lib/utils";

function invertPrice(price: BN) {
  // THis is clearly wrong, needs to be thought through more
  return parseUnits("1", PRICE_DECIMALS).div(price);
}
export function OCOOptions(props: {
  fromToken?: Token;
  toToken?: Token;
  price: BN;
  tokenInPriceUSD?: BN;
  tokenOutPriceUSD?: BN;
  amountFromAvailable?: BN;
  amountToAvailable?: BN;
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
  const [limitBuyPrice, setLimitBuyPrice] = useState(price.mul(0.9));
  const [triggerSellPrice, setTriggerSellPrice] = useState(price);
  const [limitSellPrice, setLimitSellPrice] = useState(price.mul(1.1));
  const [amountToSendBuy, setAmountToSendBuy] = useState(amountFromAvailable);
  const [amountToSendSell, setAmountToSendSell] = useState(amountToAvailable);

  const toBuyAmount = calculateAmountReceived(
    fromToken,
    toToken,
    amountToSendBuy,
    limitBuyPrice
  );
  const toSellAmount = calculateAmountReceived(
    fromToken,
    toToken,
    amountToSendSell,
    invertPrice(limitSellPrice)
  );
  return (
    <div className="mt-4 flex flex-auto">
      {fromToken && (
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
            type="bignumber"
            decimals={PRICE_DECIMALS}
            name={t`Trigger Price`}
            id="triggerBuyPrice"
            value={triggerBuyPrice}
            placeholder={t`Trigger Buy Price`}
            onChange={(value) => setTriggerBuyPrice(value)}
            required
          />
          <Input
            type="bignumber"
            decimals={PRICE_DECIMALS}
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
            onChange={(value: BN) => {
              const swapAmt = calculateAmountToSend(
                fromToken,
                toToken,
                value,
                limitBuyPrice
              );
              swapAmt && setAmountToSendBuy(swapAmt);
            }}
          />
        </div>
      )}
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
          type="bignumber"
          name={t`Trigger Price`}
          decimals={PRICE_DECIMALS}
          id="triggerSellPrice"
          value={triggerSellPrice}
          placeholder={t`Trigger Sell Price`}
          onChange={(value) => setTriggerSellPrice(value)}
          required
        />
        <Input
          type="bignumber"
          name={t`Limit Price`}
          decimals={PRICE_DECIMALS}
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
          onChange={(value: BN) => {
            const swapAmt = calculateAmountToSend(
              fromToken,
              toToken,
              value,
              invertPrice(limitSellPrice)
            );
            swapAmt && setAmountToSendSell(swapAmt);
          }}
        />
      </div>
    </div>
  );
}
