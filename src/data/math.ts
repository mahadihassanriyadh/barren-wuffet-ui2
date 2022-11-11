import { BigNumber as BN } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { PRICE_DECIMALS, Token } from "../config/tokens";

export const pow = (decimals: number) => BN.from(10).pow(decimals);

export function invertPrice(price: BN) {
  return divPrice(parseUnits("1", PRICE_DECIMALS), price);
}

export function mulPrice(tokenAmount: BN, price: BN) {
  return tokenAmount.mul(price).div(pow(PRICE_DECIMALS));
}

export function divPrice(tokenValue: BN, price: BN) {
  return tokenValue.mul(pow(PRICE_DECIMALS)).div(price);
}

export function getRelativePrice(
  token1Amount: BN,
  token1: Token,
  token2Amount: BN,
  token2: Token
) {
  const relativeDecimals = token1.decimals - token2.decimals;
  const _step1 = token1Amount.mul(pow(PRICE_DECIMALS));

  const _step2 =
    relativeDecimals > 0
      ? _step1.div(pow(relativeDecimals))
      : _step1.mul(pow(-relativeDecimals));

  return _step2.div(token2Amount);
}
