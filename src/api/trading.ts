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

function createSushiSwapAction(
  callee: Address,
  tokenIn: Token,
  tokenOut: Token,
  minAmountOfOutPerIn: BigNumber,
  WETHAddr: Address
) {
  return {
    callee: callee,
    data: utils.defaultAbiCoder.encode(
      ["address[]", "uint256"],
      [
        [
          tokenIn.address === ETH_ADDRESS ? WETHAddr : tokenIn.address,
          tokenOut.address === ETH_ADDRESS ? WETHAddr : tokenOut.address,
        ],
        minAmountOfOutPerIn,
      ]
    ) as Address,
    inputTokens: [toContractToken(tokenIn)],
    outputTokens: [toContractToken(tokenOut)],
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

  const sushiSwapExactXForY = chain
    ? getContract(chain.id, "SushiSwapExactXForY")
    : "0x";

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "createRule",
    args: [
      [trueTrigger],
      [
        createSushiSwapAction(
          sushiSwapExactXForY,
          fromToken,
          toToken,
          limitPrice,
          getWethToken(chain?.id)?.address || "0x"
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
    // this will clobber the error from prepare; But it doesnt seem to be emitting anything useful
    error,
    isError,
  };
}

export function usePrepareAddRuleCollateral(
  fundId: Address,
  ruleId: Address,
  collateral: BN,
  fees: BN
) {
  usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "addRuleCollateral",
    args: [ruleId, [collateral], [fees]],
    enabled: !!(ruleId && fundId),
  });
}

export function usePrepareActivateRule(fundId: Address, ruleId: Address) {
  return usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "activateRule",
    args: [ruleId],
    enabled: !!(ruleId && fundId),
  });
}
