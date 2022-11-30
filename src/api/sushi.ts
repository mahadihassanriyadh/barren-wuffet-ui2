import { BigNumber, FixedNumber, utils } from "ethers";
import { parseFixed } from "@ethersproject/bignumber";

import {
  Chain,
  chain as chainConfig,
  useContractRead,
  useNetwork,
} from "wagmi";
import { UseContractReadConfig } from "wagmi/dist/declarations/src/hooks/contracts/useContractRead";
import { getContract } from "../config/addresses";
import {
  Address,
  ContractToken,
  ETH_ADDRESS,
  getWethToken,
  toContractToken,
  Token,
  TOKEN_TYPE,
} from "../config/tokens";
import IUniswapV2Router02 from "../contracts/types/IUniswapV2Router02";
import IUniswapV2Factory from "../contracts/types/IUniswapV2Factory";
import IUniswapV2Pair from "../contracts/types/IUniswapV2Pair";

import { Pair as SushiPair, PairHourSnapshot } from "../../.graphclient";
import { USD_DECIMALS, PCT_DECIMALS } from "../data/formatting";

import { ActionData } from "./rpc";
import request, { gql } from "graphql-request";
import { Pool } from "./models";

function createPath(
  tokenIn: Address,
  tokenOut: Address,
  WETHAddr: Address
): [Address, Address] {
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

export function createSushiAddLiquidityAction(
  callee: Address,
  tokenA: ContractToken,
  tokenB: ContractToken,
  minAmountOfAPerB: BigNumber,
  minAmountOfBPerA: BigNumber
): ActionData {
  return {
    callee: callee,
    data: utils.defaultAbiCoder.encode(
      ["uint256", "uint256"],
      [minAmountOfAPerB, minAmountOfBPerA]
    ) as Address,
    inputTokens: [tokenA, tokenB],
    outputTokens: [tokenA, tokenB],
  };
}

export function createSushiRemoveLiquidityAction(
  callee: Address,
  tokenSLP: ContractToken,
  tokenA?: ContractToken,
  tokenB?: ContractToken,
  minAmountOfAPerSLP?: BigNumber,
  minAmountOfBPerSLP?: BigNumber
): ActionData {
  return {
    callee: callee,
    data: utils.defaultAbiCoder.encode(
      ["uint256", "uint256"],
      [minAmountOfAPerSLP, minAmountOfBPerSLP]
    ) as Address,
    inputTokens: [tokenSLP],
    outputTokens: tokenA && tokenB ? [tokenA, tokenB] : [],
  };
}

export function useSushiRemoveLiquidityAction(
  callee: Address,
  tokenSLP: Token,
  minAmountOfAPerSLP: BigNumber,
  minAmountOfBPerSLP: BigNumber
) {
  const { tokenA, tokenB } = useTokensFromSLP(toContractToken(tokenSLP));
  return createSushiRemoveLiquidityAction(
    callee,
    toContractToken(tokenSLP),
    tokenA,
    tokenB,
    minAmountOfAPerSLP,
    minAmountOfBPerSLP
  );
}

function prepareSushiTokenToSLPArgs(
  chain: Chain | undefined,
  tokenIn: Token,
  tokenOut: Token
): UseContractReadConfig<typeof IUniswapV2Factory.abi, "getPair"> {
  const swap_router_address = chain && getContract(chain.id, "SushiSwapRouter");
  const WETHAddr = getWethToken(chain?.id)?.address ?? "0x";

  return {
    address: swap_router_address,
    abi: IUniswapV2Factory.abi,
    functionName: "getPair",
    args: createPath(tokenIn.address, tokenOut.address, WETHAddr),
  };
}

export function useTokensFromSLP(tokenSLP: ContractToken): {
  tokenA: ContractToken | undefined;
  tokenB: ContractToken | undefined;
} {
  const { data: token0Addr } = useContractRead({
    address: tokenSLP.addr,
    abi: IUniswapV2Pair.abi,
    functionName: "token0",
  });

  const { data: token1Addr } = useContractRead({
    address: tokenSLP.addr,
    abi: IUniswapV2Pair.abi,
    functionName: "token1",
  });

  return {
    tokenA: token0Addr && {
      t: TOKEN_TYPE.ERC20,
      addr: token0Addr,
      id: BigNumber.from(0),
    },
    tokenB: token1Addr && {
      t: TOKEN_TYPE.ERC20,
      addr: token1Addr,
      id: BigNumber.from(0),
    },
  };
}

export function useSLPFromTokens(
  tokenIn: Token,
  tokenOut: Token
): ContractToken | undefined {
  const { chain } = useNetwork();

  const { data: slpAddr } = useContractRead(
    prepareSushiTokenToSLPArgs(chain, tokenIn, tokenOut)
  );

  return (
    slpAddr && {
      t: TOKEN_TYPE.ERC20,
      addr: slpAddr,
      id: BigNumber.from(0),
    }
  );
}

export async function getSushiPools(chain: Chain) {
  // Schema: https://github.com/sushiswap/subgraphs/blob/master/subgraphs/sushiswap/schema.graphql
  const graphUrls = {
    [chainConfig.arbitrum.id]:
      "https://api.thegraph.com/subgraphs/name/sushiswap-subgraphs/sushiswap-arbitrum",

    // Goerli:Not found....
  };

  const data = await request<{ pairs: SushiPair[] }>(
    graphUrls[chain.id],
    // can add a where: {name_contains_nocase: <whatever people type in filter box>}
    // Can openNewTab to https://www.sushi.com/earn/arb1:<id> for more info
    gql`
      {
        pairs(orderBy: liquidityUSD, orderDirection: desc, skip: 0, first: 10) {
          id
          swapFee
          type
          name
          liquidityUSD
          # sum the following up for 24H vol/fee
          hourSnapshots(orderBy: date, orderDirection: desc, first: 24) {
            volumeUSD
            feesUSD
          }
          token0 {
            id
            name
            decimals
            symbol
          }
          token1 {
            id
            name
            decimals
            symbol
          }
          reserve0
          reserve1
        }
      }
    `
  );

  // Takes s, truncates everything after the ".", returns BN
  const strToRoundedBN = (
    s: string,
    origin_decimals: number = 0,
    wanted_decimals: number = 0
  ) => {
    // Unclear how many decimals these vals can have
    // 48 seems enough?
    const roundedBN = parseFixed(FixedNumber.from(s, 48).round(0).toString());
    return roundedBN.mul(
      BigNumber.from(10).pow(wanted_decimals - origin_decimals)
    );
  };

  function get24hVolumeUSD(daySnapshots: PairHourSnapshot[]) {
    return daySnapshots.reduce(
      (acc, cur) => acc.add(strToRoundedBN(cur.volumeUSD, 0, USD_DECIMALS)),
      BigNumber.from(0)
    );
  }

  function getAprPCT(daySnapshots: PairHourSnapshot[], liquidityUSD: any) {
    return daySnapshots
      .reduce(
        (acc, cur) => acc.add(strToRoundedBN(cur.feesUSD, 0, USD_DECIMALS)),
        BigNumber.from(0)
      )
      .mul(365)
      .mul(100)
      .mul(BigNumber.from(10).pow(PCT_DECIMALS))
      .div(strToRoundedBN(liquidityUSD, 0, USD_DECIMALS));
  }

  return Promise.resolve(
    data.pairs.map(
      (pair: SushiPair): Pool => ({
        id: pair.id as Address,
        indexToken: {
          symbol: pair.name,
        },
        tokens: [
          {
            chainId: chain.id,
            name: pair.token0.name,
            symbol: pair.token0.symbol,
            decimals: pair.token0.decimals,
            address: pair.token0.id as Address,
          },
          {
            chainId: chain.id,
            name: pair.token1.name,
            symbol: pair.token1.symbol,
            decimals: pair.token1.decimals,
            address: pair.token1.id as Address,
          },
        ],
        reserves: [
          BigNumber.from(pair.reserve0),
          BigNumber.from(pair.reserve1),
        ],
        apr: getAprPCT(pair.hourSnapshots, pair.liquidityUSD),
        volume: get24hVolumeUSD(pair.hourSnapshots),
        tvl: strToRoundedBN(pair.liquidityUSD, 0, USD_DECIMALS),
        fee: strToRoundedBN(pair.swapFee, 2, PCT_DECIMALS),
      })
    )
  );
}
