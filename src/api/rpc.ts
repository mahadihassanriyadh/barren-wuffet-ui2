import {
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useContractEvent,
  useAccount,
  useBalance,
} from "wagmi";
import { SendTransactionResult } from "@wagmi/core";
import { BigNumber as BN } from "ethers";
import { TransactionReceipt } from "@ethersproject/abstract-provider";

import BWContract from "../contracts/types/BarrenWuffet";
import FundContract from "../contracts/types/Fund";

import { getContract } from "../config/addresses";
import { ERC20_DECIMALS } from "../config/numbers";
import { Address, ETH_ADDRESS, getEthToken, Token } from "../config/tokens";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { parseEther } from "ethers/lib/utils";

const factoryContractABI = BWContract.abi;
const fundContractABI = FundContract.abi;

// TODO: THIS IS NOT QUITE CORRECT. USDC has 6 decimals, not 18.
const toTokenVal = (val: number) => parseEther(val.toString()); //BN.from(val).mul(ERC20_DECIMALS);
const toSeconds = (val: Date) => BN.from(Math.round(val.getTime() / 1000));

export function useFundBalance(fundId: Address, tokenAddress: Address) {
  return useBalance({
    addressOrName: fundId,
    token: tokenAddress === ETH_ADDRESS ? undefined : tokenAddress,
  });
}

export function useConnectAndWrite(
  isSaving: boolean,
  setIsSaving: (val: boolean) => void,
  write?: () => void
) {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  useEffect(() => {
    if (isSaving && !isConnected) {
      openConnectModal?.();
    }
  }, [isSaving, isConnected, openConnectModal]);

  useEffect(() => {
    // write wont be set if the user isnt connected
    if (isSaving && write) {
      write();
      setIsSaving(false);
    }
  }, [isSaving, setIsSaving, write]);

  // useEffect(() => {
  //   async function fetchTxData(data: SendTransactionResult | undefined) {
  //     const receipt = await data?.wait();
  //     setReceipt(receipt);
  //   }
  //   if (data && !receipt) {
  //     fetchTxData(data);
  //   }
  // }, [data, receipt]);
}

export function usePrepareCreateFund(values: {
  fundName: string;
  amountRaised: number;
  closeDate: Date;
  lockin: Date;
  fees: number;
  eventCallback: (params: {
    owner: Address;
    fund: string | null;
    name: string | null;
  }) => void;
}) {
  const { fundName, amountRaised, closeDate, lockin, fees, eventCallback } =
    values;
  const { chain } = useNetwork();

  const factoryContract = chain && getContract(chain.id, "BarrenWuffet");

  const depositToken = getEthToken(chain?.id);

  const { config, error, isError } = usePrepareContractWrite({
    address: factoryContract,
    abi: factoryContractABI,
    functionName: "createFund",
    args: [
      fundName,
      {
        minCollateralPerSub: toTokenVal(0),
        maxCollateralPerSub: toTokenVal(amountRaised),
        minCollateralTotal: toTokenVal(0),
        maxCollateralTotal: toTokenVal(amountRaised),
        deadline: toSeconds(closeDate),
        lockin: toSeconds(lockin),
        allowedDepositToken: depositToken,
        onlyWhitelistedInvestors: false,
      },
      BN.from(fees * 100),
      [], // whitelisted tokens
    ],
    enabled: !!(fundName && amountRaised && closeDate && lockin),
  });

  const resp = useContractWrite(config);

  useContractEvent({
    address: factoryContract,
    abi: factoryContractABI,
    eventName: "Created",
    listener(owner, fund, name) {
      eventCallback({ owner, fund, name });
    },
  });

  return {
    ...resp,
    // this will clobber the error from prepare; But it doesnt seem to be emitting anything useful
    error,
    isError,
  };
}

export function usePrepareSubscribeToFund(values: {
  fundId?: string;
  amount: number;
  eventCallback?: (params: {
    sender: Address | null;
    token: Address | null;
    amount: number | null;
  }) => void;
}) {
  const { fundId, amount, eventCallback } = values;
  const { chain } = useNetwork();

  const depositToken = getEthToken(chain?.id);
  const amountBN = toTokenVal(amount);

  const { config, error, isError } = usePrepareContractWrite({
    address: fundId,
    abi: fundContractABI,
    functionName: "deposit",
    args: [depositToken, amountBN],
    overrides: {
      value: amountBN,
    },
    enabled: !!(fundId && amount),
  });

  const resp = useContractWrite(config);

  useContractEvent({
    address: fundId,
    abi: fundContractABI,
    eventName: "Deposit",
    listener(sender, token, amount) {
      eventCallback?.({ sender, token, amount });
    },
  });

  return {
    ...resp,
    // this will clobber the error from prepare; But it doesnt seem to be emitting anything useful
    error,
    isError,
  };
}
