import {
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useContractEvent,
  useContractRead,
} from "wagmi";
import { BigNumber as BN, utils } from "ethers";

import FundContract from "../contracts/types/Fund";
import RoboCopContract from "../contracts/types/RoboCop";

import { getContract } from "../config/addresses";
import { Address, getWethToken, Token } from "../config/tokens";
import { useEffect, useState } from "react";
import { createSushiSwapAction } from "./sushi";
import { ActionData } from "./rpc";
import { getPriceTrigger, getTrueTrigger } from "./triggers";

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

export function usePrepareCreateAndActivateSwapRule(values: {
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  limitPrice: BN;
  collateral: BN;
  fees: BN;
  triggerPrice: BN;
}) {
  const { fundId, collateral, fees } = values;
  const [ruleId, setRuleId] = useState<Address | undefined>(undefined);
  const [isSwapInitiated, setIsSwapInitiated] = useState<boolean>(false);

  const resp = usePrepareCreateSwapRule({
    ...values,
    eventCallback: ({ ruleHash }) => {
      console.log(`Rule hash: ${ruleHash}`);
      // this is not a good idea, because the listener will be called on prepare and might give old rules hashes.
      // we need to call it after write, and make sure it only returns a new hash.
      setRuleId(ruleHash);
    },
  });

  const { writeAsync: writeCollateralAsync } = usePrepareAddRuleCollateral({
    fundId,
    ruleId,
    collateral,
    fees,
  });

  const { writeAsync: writeActivateAsync } = usePrepareActivateRule({
    fundId,
    ruleId,
  });

  useEffect(() => {
    if (ruleId && isSwapInitiated) {
      if (writeCollateralAsync && writeActivateAsync) {
        writeCollateralAsync().then(() => {
          writeActivateAsync();
        });
        setIsSwapInitiated(false);
      }
    }
  }, [ruleId, isSwapInitiated, writeCollateralAsync, writeActivateAsync]);

  const newWrite = (write: any) => () => {
    if (write) {
      write();
      setRuleId(undefined);
      setIsSwapInitiated(true);
    }
  };

  return {
    ...resp,
    write: resp?.write ? newWrite(resp.write) : undefined,
  };
}

export function usePrepareCreateSwapRule(values: {
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  limitPrice: BN;
  triggerPrice: BN;
  eventCallback?: (params: { ruleHash: Address }) => void;
}) {
  const {
    fundId,
    fromToken,
    toToken,
    limitPrice,
    triggerPrice,
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
    ],
    enabled:
      !!chain && !limitPrice.isZero() && triggerPrice && !triggerPrice.isZero(),
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
