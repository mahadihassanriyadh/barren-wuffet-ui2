import { BigNumber as BN } from "ethers";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { Address, toContractToken, Token } from "../config/tokens";
import FundContract from "../contracts/types/Fund";
import {
  createSushiAddLiquidityAction,
  createSushiRemoveLiquidityAction,
  useSushiRemoveLiquidityAction,
} from "./sushi";
import { getTrueTrigger } from "./triggers";

export function usePrepareAddLPRule(values: {
  fundId: Address;
  liquidityPool: Address;
  tokenA: Token;
  tokenB: Token;
  minAmountOfBPerA: BN;
  minAmountOfAPerB: BN;
  collaterals: BN[];
  fees: BN[];
}) {
  const {
    fundId,
    liquidityPool,
    tokenA,
    tokenB,
    minAmountOfBPerA,
    minAmountOfAPerB,
    collaterals,
    fees,
  } = values;
  const { chain } = useNetwork();

  const action = createSushiAddLiquidityAction(
    liquidityPool,
    toContractToken(tokenA),
    toContractToken(tokenB),
    minAmountOfAPerB,
    minAmountOfBPerA
  );
  const currentTime = Math.round(new Date().getTime() / 1000);

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "takeAction",

    args: [
      getTrueTrigger({ currentTime, chainId: chain?.id }),
      action,
      collaterals,
      fees,
    ],
    enabled: !!chain,
  });

  const resp = useContractWrite(config);

  return resp;
}

export function usePrepareRemoveLPRule(values: {
  fundId: Address;
  liquidityPool: Address;
  tokenSLP: Token;
  minAmountOfBPerA: BN;
  minAmountOfAPerB: BN;
  collaterals: BN[];
  fees: BN[];
}) {
  const {
    fundId,
    liquidityPool,
    tokenSLP,
    minAmountOfBPerA,
    minAmountOfAPerB,
    collaterals,
    fees,
  } = values;
  const { chain } = useNetwork();

  const action = useSushiRemoveLiquidityAction(
    liquidityPool,
    tokenSLP,
    minAmountOfAPerB,
    minAmountOfBPerA
  );
  const currentTime = Math.round(new Date().getTime() / 1000);

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: FundContract.abi,
    functionName: "takeAction",
    args: [
      getTrueTrigger({ currentTime, chainId: chain?.id }),
      action,
      collaterals,
      fees,
    ],
    enabled: !!chain,
  });

  const resp = useContractWrite(config);

  return resp;
}
