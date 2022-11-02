import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { BigNumber as BN } from "ethers";

import BWContract from "../contracts/types/BarrenWuffet";

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

  const depositToken = {
    t: 0,
    addr: chain
      ? getEthToken(chain.id)
      : "0x0000000000000000000000000000000000000000",
    id: BN.from(0).mul(ERC20_DECIMALS),
  };

  const { config } = usePrepareContractWrite({
    address: factoryContract,
    abi: factoryContractABI,
    functionName: "createFund",
    args: [
      fundName,
      {
        minCollateralPerSub: BN.from(0).mul(ERC20_DECIMALS),
        maxCollateralPerSub: BN.from(amountRaised).mul(ERC20_DECIMALS),
        minCollateralTotal: BN.from(0).mul(ERC20_DECIMALS),
        maxCollateralTotal: BN.from(amountRaised).mul(ERC20_DECIMALS),
        deadline: BN.from(closeDate.getTime()),
        lockin: BN.from(lockin.getTime()),
        allowedDepositToken: depositToken,
      },
      BN.from(fees * 100).mul(ERC20_DECIMALS),
      [], // whitelisted tokens
    ],
  });

  return useContractWrite(config);
}
