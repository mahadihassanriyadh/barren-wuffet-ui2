import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { BigNumber, BigNumber as BN } from "ethers";

import BWContract from "../contracts/types/BarrenWuffet";

import { getContract } from "../config/addresses";
import { ERC20_DECIMALS } from "../config/numbers";
import { getEthToken } from "../config/tokens";

const factoryContractABI = BWContract.abi;
const toTokenVal = (val: number) => BN.from(val).mul(ERC20_DECIMALS);
const toSeconds = (val: Date) => BN.from(Math.round(val.getTime() / 1000));

export function usePrepareCreateFund(values: {
  fundName: string;
  amountRaised: number;
  closeDate: Date;
  lockin: Date;
  fees: number;
}) {
  const { fundName, amountRaised, closeDate, lockin, fees } = values;
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
      },
      BN.from(fees * 100),
      [], // whitelisted tokens
    ],
    enabled: !!(fundName && amountRaised && closeDate && lockin),
  });

  const resp = useContractWrite(config);
  return {
    ...resp,
    // this will clobber the error from prepare; But it doesnt seem to be emitting anything useful
    error,
    isError,
  };
}
