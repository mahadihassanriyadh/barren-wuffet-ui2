import { BigNumber as BN, utils } from "ethers";
import { getContract } from "../config/addresses";
import { Address, Token } from "../config/tokens";
import { GT, LT, PRICE_TRIGGER_TYPE, TIMESTAMP_TRIGGER_TYPE } from "./models";
import { TriggerData } from "./rpc";

export interface TwapRange {
  startTime: number;
  numIntervals: number;
  gapBetweenIntervals: number;
}

export function createTimestampTrigger(
  timestampTriggerAddr: Address,
  operator: typeof GT | typeof LT,
  target: number
): TriggerData {
  return {
    createTimeParams: utils.defaultAbiCoder.encode(
      ["uint8", "uint256"],
      [operator, target]
    ) as Address,
    triggerType: TIMESTAMP_TRIGGER_TYPE,
    callee: timestampTriggerAddr,
  };
}

export function getTrueTrigger({
  currentTime,
  chainId,
}: {
  currentTime: number;
  chainId?: number;
}): TriggerData {
  return createTimestampTrigger(
    chainId !== undefined ? getContract(chainId, "TimestampTrigger") : "0x",
    GT,
    currentTime - 3600 * 24
  );
}

export function getPriceTrigger({
  fromToken,
  toToken,
  triggerPrice,
  chainId,
}: {
  fromToken: Token;
  toToken: Token;
  triggerPrice: BN;
  chainId?: number;
}): TriggerData {
  return {
    createTimeParams: utils.defaultAbiCoder.encode(
      ["address", "address", "uint8", "uint256"],
      // buy if the price is cheaper than trigger.
      // The swap action itself is a buy action, so this is always LT
      // To sell, swap the token order, invert the price (and it is still LT)
      // < 1 price is not an issue because this is always BN with PRICE_DECIMALS multiplied.
      [fromToken.address, toToken.address, LT, triggerPrice]
    ) as Address,
    triggerType: PRICE_TRIGGER_TYPE,
    callee: chainId !== undefined ? getContract(chainId, "PriceTrigger") : "0x",
  };
}

export function createTwapTriggerSet(
  startTime: number,
  numIntervals: number,
  gapBetweenIntervals: number,
  tolerance: number = 13,
  additionalTriggers: TriggerData[] = [],
  chainId?: number
) {
  var triggersSet = [];

  const timestampTriggerAddr: Address | undefined =
    chainId !== undefined ? getContract(chainId, "TimestampTrigger") : "0x";

  for (var i = 0; i < numIntervals; i++) {
    triggersSet.push(
      additionalTriggers.concat([
        createTimestampTrigger(
          timestampTriggerAddr,
          GT,
          startTime + i * gapBetweenIntervals
        ),
        createTimestampTrigger(
          timestampTriggerAddr,
          LT,
          startTime + i * gapBetweenIntervals + tolerance
        ),
      ])
    );
  }

  return triggersSet;
}
