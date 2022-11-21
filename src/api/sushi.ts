import { BigNumber, utils } from "ethers";
import { useContractRead, useNetwork } from "wagmi";
import { getContract } from "../config/addresses";
import {
  Address,
  ETH_ADDRESS,
  getWethToken,
  toContractToken,
  Token,
} from "../config/tokens";
import IUniswapV2Router02 from "../contracts/types/IUniswapV2Router02";
import { ActionData } from "./rpc";

function createPath(tokenIn: Address, tokenOut: Address, WETHAddr: Address) {
  return [
    tokenIn === ETH_ADDRESS ? WETHAddr : tokenIn,
    tokenOut === ETH_ADDRESS ? WETHAddr : tokenOut,
  ];
}

export function createSushiSwapAction(
  callee: Address,
  tokenIn: Token,
  tokenOut: Token,
  minAmountOfOutPerIn: BigNumber,
  WETHAddr: Address
): ActionData {
  return {
    callee: callee,
    data: utils.defaultAbiCoder.encode(
      ["address[]", "uint256"],
      [
        createPath(tokenIn.address, tokenOut.address, WETHAddr),
        minAmountOfOutPerIn,
      ]
    ) as Address,
    inputTokens: [toContractToken(tokenIn)],
    outputTokens: [toContractToken(tokenOut)],
  };
}

export function useSushiAmountOut(
  tokenIn: Token,
  tokenOut: Token,
  amountIn: BigNumber
): BigNumber {
  const { chain } = useNetwork();
  const swap_router_address = chain && getContract(chain.id, "SushiSwapRouter");
  const WETHAddr = getWethToken(chain?.id)?.address ?? "0x";

  const { data: amountsOut } = useContractRead({
    address: swap_router_address,
    abi: IUniswapV2Router02.abi,
    functionName: "getAmountsOut",
    args: [amountIn, createPath(tokenIn.address, tokenOut.address, WETHAddr)],
  });

  return amountsOut?.[1] ?? BigNumber.from("0");
}
