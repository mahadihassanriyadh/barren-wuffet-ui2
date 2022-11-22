import { BigNumber, utils } from "ethers";
import { AbiCoder } from "ethers/lib/utils";
import { Chain, useContractRead, useNetwork } from "wagmi";
import { UseContractReadConfig } from "wagmi/dist/declarations/src/hooks/contracts/useContractRead";
import { Action, ActionID } from "../config/actions";
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

export function prepareSushiAmountOutArgs(
  chain: Chain | undefined,
  tokenIn: Token,
  tokenOut: Token,
  amountIn: BigNumber
): UseContractReadConfig<typeof IUniswapV2Router02.abi, "getAmountsOut"> {
  const swap_router_address = chain && getContract(chain.id, "SushiSwapRouter");
  const WETHAddr = getWethToken(chain?.id)?.address ?? "0x";

  return {
    address: swap_router_address,
    abi: IUniswapV2Router02.abi,
    functionName: "getAmountsOut",
    args: [amountIn, createPath(tokenIn.address, tokenOut.address, WETHAddr)],
  };
}

export function extractSushiAmountOutData(
  data?: import("@wagmi/core").GetReturnType<{
    abi: typeof IUniswapV2Router02.abi;
    functionName: "getAmountsOut";
  }>
) {
  return data?.[1] ?? BigNumber.from("0");
}

export function useSushiAmountOut(
  tokenIn: Token,
  tokenOut: Token,
  amountIn: BigNumber
): BigNumber {
  const { chain } = useNetwork();
  const { data: amountsOut } = useContractRead(
    prepareSushiAmountOutArgs(chain, tokenIn, tokenOut, amountIn)
  );

  return extractSushiAmountOutData(amountsOut);
}
