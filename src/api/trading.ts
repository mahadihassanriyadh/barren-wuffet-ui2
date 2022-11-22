import {
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useContractEvent,
  useContractRead,
  Chain,
} from "wagmi";
import { BigNumber as BN } from "ethers";

import FundContract from "../contracts/types/Fund";
import RoboCopContract from "../contracts/types/RoboCop";

import { getContract } from "../config/addresses";
import { Address, getWethToken, Token } from "../config/tokens";
import {
  createSushiSwapAction,
  extractSushiAmountOutData,
  prepareSushiAmountOutArgs,
} from "./sushi";
import { ActionData } from "./rpc";
import {
  createTwapTriggerSet,
  getPriceTrigger,
  getTrueTrigger,
  TwapRange,
} from "./triggers";
import { percentOf } from "../data/math";
import { UsePrepareContractWriteConfig } from "wagmi/dist/declarations/src/hooks/contracts/usePrepareContractWrite";
import { Action, ActionID } from "../config/actions";

export function useAmountOut(
  action: Action,
  tokenIn: Token,
  tokenOut: Token,
  amountIn: BN
) {
  const { chain } = useNetwork();
  const readMap = {
    [ActionID.SushiSwapExactXForY as ActionID]: prepareSushiAmountOutArgs,
  };

  const readArgs = readMap[action.id]?.(chain, tokenIn, tokenOut, amountIn);

  const { data: amountsOut } = useContractRead(readArgs);

  const extractMap = {
    [ActionID.SushiSwapExactXForY as ActionID]: extractSushiAmountOutData,
  };
  return extractMap[action.id]?.(amountsOut) || BN.from("0");
}

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
  twapRange?: TwapRange;
  eventCallback?: (params: { ruleHash: Address }) => void;
}) {
  const {
    fundId,
    fromToken,
    toToken,
    limitPrice,
    triggerPrice,
    collateral,
    twapRange,
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

  const { data: platformFees } = useFundFees(fundId);
  const managerToPlatformFeePercentage =
    platformFees?.managerToPlatformFeePercentage || BN.from(0);
  const action = createSushiSwapAction(
    sushiSwapExactXForY ?? "0x",
    fromToken,
    toToken,
    limitPrice,
    getWethToken(chain?.id)?.address ?? "0x"
  );

  const twapArgs = twapRange
    ? getTwapArgs({
        chain,
        action,
        totalCollaterals: [collateral],
        twapRange,
        managerToPlatformFeePercentage,
      })
    : undefined;

  const oneOffArgs: UsePrepareContractWriteConfig<
    typeof FundContract.abi,
    "createRule"
  > = {
    functionName: "createRule",
    args: [
      [priceTrigger],
      [action],
      true,
      [collateral],
      [percentOf(collateral, managerToPlatformFeePercentage)],
    ],
  };

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    ...(twapArgs ?? oneOffArgs),
    enabled:
      !!chain &&
      !limitPrice.isZero() &&
      triggerPrice &&
      !triggerPrice.isZero() &&
      !collateral.isZero() &&
      !managerToPlatformFeePercentage.isZero() &&
      (!twapRange || twapArgs?.enabled),
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

export function useFundFees(fundId: Address) {
  return useContractRead({
    address: fundId,
    abi: FundContract.abi,
    functionName: "feeParams",
  });
}

/**
 *
 * @param totalCollaterals: total number of assets to be used in the action
 * @param action
 * @param startTime; block.timestamp where the first rule should be executed
 * @param numIntervals: How many transactions do you want
 * @param gapBetweenIntervals: In seconds
 */
export function getTwapArgs({
  chain,
  action,
  totalCollaterals,
  twapRange,
  managerToPlatformFeePercentage,
}: {
  chain?: Chain;
  action: ActionData;
  totalCollaterals: BN[];
  twapRange: TwapRange;
  managerToPlatformFeePercentage: BN;
}): UsePrepareContractWriteConfig<typeof FundContract.abi, "createRules"> {
  const { startTime, numIntervals, gapBetweenIntervals } = twapRange;
  const triggersSet = createTwapTriggerSet(
    startTime,
    numIntervals,
    gapBetweenIntervals,
    13, // specifying a window within which a tx may pass. Needed for inherent uncertainty of when a block is mined.
    [],
    chain?.id
  );

  const collateralsPerInterval = totalCollaterals.map((collateral) =>
    collateral.div(numIntervals)
  );
  const numTriggers = triggersSet.length;
  const platformFees = collateralsPerInterval.map((collateral) =>
    percentOf(collateral, managerToPlatformFeePercentage)
  );

  return {
    functionName: "createRules",
    args: [
      triggersSet,
      Array(numTriggers).fill([action]),
      Array(numTriggers).fill(true),
      Array(numTriggers).fill(collateralsPerInterval),
      Array(numTriggers).fill(platformFees),
    ],
    enabled: !!chain && !!numIntervals && !!gapBetweenIntervals,
  };
}
