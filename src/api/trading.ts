import {
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useContractEvent,
  useContractRead,
} from "wagmi";
import { BigNumber, BigNumber as BN, utils } from "ethers";

import FundContract from "../contracts/types/Fund";
import RoboCopContract from "../contracts/types/RoboCop";

import { getContract } from "../config/addresses";
import {
  Address,
  ETH_ADDRESS,
  getWethToken,
  toContractToken,
  Token,
} from "../config/tokens";
import { GT, TIMESTAMP_TRIGGER_TYPE } from "./models";
import { AmountToSendInput } from "../components/SwapBox/AmountToSendInput";
import { useEffect, useState } from "react";
import { useConnectAndWrite } from "./rpc";
import { write } from "fs";
import { createSushiSwapAction } from "./sushi";

export function usePrepareCreateAndActivateSwapRule(values: {
  fundId: Address;
  fromToken: Token;
  toToken: Token;
  limitPrice: BN;
  collateral: BN;
  fees: BN;
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
  eventCallback?: (params: { ruleHash: Address }) => void;
}) {
  const { fundId, fromToken, toToken, limitPrice, eventCallback } = values;
  const { chain } = useNetwork();

  const { data: roboCopId } = useContractRead({
    address: fundId,
    abi: FundContract.abi,
    functionName: "roboCop",
  });

  // need to get block time.
  const currentTime = Math.round(new Date().getTime() / 1000);

  const trueTrigger = {
    createTimeParams: utils.defaultAbiCoder.encode(
      ["uint8", "uint256"],
      [GT, currentTime - 1]
    ) as Address,
    triggerType: TIMESTAMP_TRIGGER_TYPE,
    callee: chain ? getContract(chain.id, "TimestampTrigger") : "0x",
  };

  const sushiSwapExactXForY =
    chain && getContract(chain.id, "SushiSwapExactXForY");

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "createRule",
    args: [
      [trueTrigger],
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
    enabled: !!chain && !limitPrice.isZero(),
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
