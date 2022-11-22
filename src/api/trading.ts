import {
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useContractEvent,
  useContractRead,
} from "wagmi";
import { BigNumber as BN, FixedNumber, utils } from "ethers";

import FundContract from "../contracts/types/Fund";
import RoboCopContract from "../contracts/types/RoboCop";

import { getContract } from "../config/addresses";
import { Address, getWethToken, Token } from "../config/tokens";
import { useEffect, useState } from "react";
import { createSushiSwapAction } from "./sushi";
import { ActionData, TriggerData } from "./rpc";
import {
  createTwapTriggerSet,
  getPriceTrigger,
  getTrueTrigger,
} from "./triggers";

export function usePrepareSushiSwapTakeAction(values: {
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  limitPrice: BN;
  collateral: BN;
  fees: BN;
}) {
  const { fundId, fromToken, toToken, limitPrice, collateral, fees } = values;
  const { chain } = useNetwork();
  const sushiSwapExactXForY =
    chain && getContract(chain.id, "SushiSwapExactXForY");

  const sushiSwapAction = createSushiSwapAction(
    sushiSwapExactXForY ?? "0x",
    fromToken,
    toToken,
    limitPrice,
    getWethToken(chain?.id)?.address ?? "0x"
  );

  return usePrepareTakeImmediateAction({
    fundId,
    action: sushiSwapAction,
    collateral,
    fees,
    enabled: !limitPrice.isZero(),
  });
}

export function usePrepareTakeImmediateAction(values: {
  fundId: Address;
  action: ActionData;
  collateral: BN;
  fees: BN;
  enabled: boolean;
}) {
  const { fundId, collateral, fees, action, enabled } = values;
  const { chain } = useNetwork();
  // need to get block time.
  const currentTime = Math.round(new Date().getTime() / 1000);

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "takeAction",
    args: [
      getTrueTrigger({ currentTime, chainId: chain?.id }),
      action,
      [collateral ?? BN.from(0)],
      [fees ?? BN.from(0)],
    ],
    enabled: !!chain && enabled,
  });

  const resp = useContractWrite(config);

  return {
    ...resp,
    error: error || resp.error,
    isError: isError || resp.isError,
  };
}

export function usePrepareCreateSwapRule(values: {
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  limitPrice: BN;
  triggerPrice: BN;
  collateral: BN;
  eventCallback?: (params: { ruleHash: Address }) => void;
}) {
  const {
    fundId,
    fromToken,
    toToken,
    limitPrice,
    triggerPrice,
    collateral,
    eventCallback,
  } = values;
  const { chain } = useNetwork();

  const { data: roboCopId } = useContractRead({
    address: fundId,
    abi: FundContract.abi,
    functionName: "roboCop",
  });

  const priceTrigger = getPriceTrigger({
    fromToken,
    toToken,
    triggerPrice,
    chainId: chain?.id,
  });

  const sushiSwapExactXForY =
    chain && getContract(chain.id, "SushiSwapExactXForY");

  const platformFees = usePlatformFees(fundId, [collateral]);

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "createRule",
    args: [
      [priceTrigger],
      [
        createSushiSwapAction(
          sushiSwapExactXForY ?? "0x",
          fromToken,
          toToken,
          limitPrice,
          getWethToken(chain?.id)?.address ?? "0x"
        ),
      ],
      true,
      [collateral],
      platformFees,
    ],
    enabled:
      !!chain &&
      !limitPrice.isZero() &&
      triggerPrice &&
      !triggerPrice.isZero() &&
      !collateral.isZero() &&
      !platformFees[0].isZero(),
  });

  const resp = useContractWrite(config);

  useContractEvent({
    address: roboCopId,
    abi: RoboCopContract.abi,
    eventName: "Created",
    listener(ruleHash) {
      eventCallback?.({ ruleHash });
    },
  });

  return {
    ...resp,
    error: error || resp.error,
    isError: isError || resp.isError,
  };
}

export function usePrepareAddRuleCollateral(values: {
  fundId: Address;
  ruleId?: Address;
  collateral?: BN;
  fees?: BN;
}) {
  const { fundId, ruleId, collateral, fees } = values;
  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "addRuleCollateral",
    args: [ruleId ?? "0x", [collateral ?? BN.from(0)], [fees ?? BN.from(0)]],
    enabled: !!(ruleId && fundId),
  });
  const resp = useContractWrite(config);

  return {
    ...resp,
    error: error || resp.error,
    isError: isError || resp.isError,
  };
}

export function usePrepareActivateRule(values: {
  fundId: Address;
  ruleId?: Address;
}) {
  const { fundId, ruleId } = values;
  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "activateRule",
    args: [ruleId ?? "0x"],
    enabled: !!(ruleId && fundId),
  });
  const resp = useContractWrite(config);
  return {
    ...resp,
    error: error || resp.error,
    isError: isError || resp.isError,
  };
}

export function usePlatformFees(fundId: Address, collaterals: BN[]) {
  const { data: feeParams } = useContractRead({
    address: fundId,
    abi: FundContract.abi,
    functionName: "feeParams",
  });
  return collaterals.map((collateral) =>
    feeParams
      ? feeParams.managerToPlatformFeePercentage.mul(collateral).div(100)
      : BN.from(0)
  );
}

/**
 *
 * @param totalCollaterals: total number of assets to be used in the action
 * @param action
 * @param startTime; block.timestamp where the first rule should be executed
 * @param numIntervals: How many transactions do you want
 * @param gapBetweenIntervals: In seconds
 */
export function usePrepareCreateTwapRule({
  fundId,
  startTime,
  numIntervals,
  gapBetweenIntervals,
  totalCollaterals,
  fromToken,
  toToken,
  limitPrice,
}: {
  fundId: Address;
  totalCollaterals: BN[];
  fromToken: Token;
  toToken: Token;
  limitPrice: BN;
  startTime: number;
  numIntervals: number;
  gapBetweenIntervals: number;
}) {
  const { chain } = useNetwork();

  const action = createSushiSwapAction(
    (chain && getContract(chain.id, "SushiSwapExactXForY")) ?? "0x",
    fromToken,
    toToken,
    limitPrice,
    getWethToken(chain?.id)?.address ?? "0x"
  );

  const triggersSet = createTwapTriggerSet(
    startTime,
    numIntervals,
    gapBetweenIntervals,
    13, // specifying a window within which a tx may pass. Needed for inherent uncertainty of when a block is mined.
    [],
    chain?.id
  );

  const collateralsPerInterval = totalCollaterals.map((collateral) => {
    return collateral.div(numIntervals);
  });
  const numTriggers = triggersSet.length;
  const platformFees = usePlatformFees(fundId, collateralsPerInterval);

  var actionsSet = Array(numTriggers).fill(action);
  var activatesSet = Array(numTriggers).fill(true);
  const collateralsSet = Array(numTriggers).fill(collateralsPerInterval);
  var feesSet = Array(numTriggers).fill(platformFees);

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "createRules",
    args: [triggersSet, actionsSet, activatesSet, collateralsSet, feesSet],
    enabled: !!chain && !!numIntervals && !!gapBetweenIntervals,
  });

  const resp = useContractWrite(config);

  return {
    ...resp,
    error: error || resp.error,
    isError: isError || resp.isError,
  };
}
