import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { Abi as AbiType } from "abitype";
import { BigNumber } from "ethers";

import BWContract from "../contracts/BarrenWuffet.json";
import { getContract } from "../config/addresses";
import { ERC20_DECIMALS } from "../config/constants";
import { getEthToken } from "../config/tokens";

const factoryContractABI = BWContract.abi;

export function usePrepareCreateFund(values: {
  fundName: string;
  amountRaised: number;
  closeDate: Date;
  lockin: Date;
  fees: number;
}) {
  const { fundName, amountRaised, closeDate, lockin, fees } = values;
  const { chain } = useNetwork();

  const factoryContract = chain ? getContract(chain.id, "BarrenWuffet") : "";

  const { config } = usePrepareContractWrite({
    address: factoryContract,
    abi: factoryContractABI as AbiType,
    functionName: "createFund",
    args: [
      fundName,
      {
        minCollateralPerSub: BigNumber.from(0).mul(ERC20_DECIMALS),
        maxCollateralPerSub: BigNumber.from(amountRaised).mul(ERC20_DECIMALS),
        minCollateralTotal: BigNumber.from(0).mul(ERC20_DECIMALS),
        maxCollateralTotal: BigNumber.from(amountRaised).mul(ERC20_DECIMALS),
        deadline: closeDate.getTime(),
        lockin: lockin.getTime(),
        allowedDepositToken: chain
          ? [0, getEthToken(chain.id), 0]
          : [0, "0x0000000000000000000000000000000000000000", 0],
      },
      fees * 100,
      [], // whitelisted tokens
    ],
  });

  return useContractWrite(config);
}
