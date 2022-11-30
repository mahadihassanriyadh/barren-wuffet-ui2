import { ReactComponent as OpenIcon } from "../../../img/icons/openIcon.svg";
import { ReactComponent as CopyIcon } from "../../../img/icons/copyIcon.svg";
import { BigNumber } from "ethers";
import { Token } from "../../../config/tokens";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils";
import { Pool } from "../../../api/models";

const CurrencyReserves = ({
  tokens,
  reserves,
}: {
  tokens: Token[];
  reserves: BigNumber[];
}) => {
  const reservesData: {
    token: Token;
    amount: BigNumber;
    amountUSD: BigNumber;
    percent: BigNumber;
  }[] = tokens.map((t, i) => ({
    token: t,
    amount: reserves[i],
    amountUSD: parseUnits("0", 18).mul(1000),
    percent: BigNumber.from("0"),
  }));

  return (
    <div>
      <h3 className="font-ubuntu font-medium text-[18px] text-white mt-[26px]">
        Currency reserves
      </h3>
      <div className="mt-[17px] divide-y-[0.4px] divide-solid divide-[#575771]">
        {reservesData.map((r) => (
          <div className="h-[29px] pb-[6px] flex justify-between">
            <div className="flex flex-row items-center">
              <img
                className="mr-[8.5px]"
                src={r.token.logoURI}
                alt={r.token.name}
              />
              <span className="font-ubuntu font-medium text-[12px] text-white mr-[13px] w-[31px]">
                {r.token.name}
              </span>
              <OpenIcon className="mr-[10px] cursor-pointer" />
              <CopyIcon className="cursor-pointer" />
            </div>
            <div className="flex flex-row items-center">
              <p className="font-ubuntu font-medium text-[12px] text-white text-right">
                {formatUnits(r.amount, r.token.decimals)}
                <span className="ml-[3px] text-[10px] text-[#8D8D92]">
                  ({r.percent.div(100).toString()}%)
                </span>
              </p>
            </div>
          </div>
        ))}

        <div className="h-[29px] pt-[11px] flex justify-between">
          <span className="font-ubuntu font-normal text-[11px] text-dtext mt-[3px]">
            USD total
          </span>
          <span className="font-ubuntu font-medium text-[12px] text-white text-right">
            {formatUnits(
              reservesData.reduce(
                (total, r) => total.add(r.amountUSD),
                BigNumber.from(0)
              ),
              18
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

const InfoPanel = ({ pool }: { pool: Pool }) => {
  return (
    <div className="container mx-auto w-[350px] rounded-[15px] px-[23px] pt-[29px] pb-[26px] bg-card">
      <h2 className="font-ubuntu font-medium text-[20px] text-white">
        Contracts
      </h2>
      <div className="mt-[14px] divide-y-[0.4px] divide-solid divide-[#575771]">
        <div className="h-[29px] pb-[6px] flex items-center justify-between">
          <div className="font-ubuntu font-medium text-[12px] text-white">
            Pool
          </div>
          <div className="flex flex-row">
            <span className="font-ubuntu font-medium text-[12px] text-white underline mr-[13px]">
              {pool.id}
            </span>
            <OpenIcon className="mr-[10px] cursor-pointer" />
            <CopyIcon className="cursor-pointer" />
          </div>
        </div>
        {/* <div className="h-[29px] pt-[6px] flex items-center justify-between">
          <div className="font-ubuntu font-medium text-[12px] text-white">
            Token
          </div>
          <div className="flex flex-row">
            <span className="font-ubuntu font-medium text-[12px] text-white underline mr-[13px]">
              0x8E...21D2
            </span>
            <OpenIcon className="mr-[10px] cursor-pointer" />
            <CopyIcon className="cursor-pointer" />
          </div>
        </div> */}
      </div>

      <CurrencyReserves tokens={pool.tokens} reserves={pool.reserves} />

      {/* <div className="mt-[10px] bg-banner px-[20px] pt-[13px] pb-[18px] rounded-[10px]">
        <div className="flex justify-between">
          <span className="font-ubuntu font-normal text-[12px] text-dtext">
            Fee
          </span>
          <span className="font-ubuntu font-normal text-[12px] text-dtext">
            Admin fee
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-ubuntu font-medium text-[12px] text-white">
            0.071%
          </span>
          <span className="font-ubuntu font-medium text-[12px] text-white">
            0.035%
          </span>
        </div>
        <div className="flex justify-between mt-[10px]">
          <span className="font-ubuntu font-normal text-[12px] text-dtext">
            Virtual price <br />
            Average value of pool token
          </span>
          <span className="font-ubuntu font-medium text-[12px] text-white">
            1.024
          </span>
        </div>
        <h3 className="font-ubuntu font-medium text-[18px] text-white mt-[10px]">
          Pool Parameters
        </h3>
        <div className="flex justify-between mt-[10px] items-center">
          <span className="font-ubuntu font-normal text-[10px] text-dtext">
            A <br />
            Amplification coefficient chosen from <br />
            fluction of prices around 1
          </span>
          <span className="font-ubuntu font-medium text-[12px] text-white">
            1707629
          </span>
        </div>
        <div className="flex justify-between mt-[10px] items-center">
          <span className="font-ubuntu font-normal text-[10px] text-dtext">
            Liqudity utilization 24h Volume/
            <br />
            Liquidity ratio
          </span>
          <span className="font-ubuntu font-medium text-[12px] text-white">
            20.61%
          </span>
        </div>
        <div className="flex justify-between mt-[10px] items-center">
          <span className="font-ubuntu font-normal text-[10px] text-dtext">
            Dalily USD volume
          </span>
          <span className="font-ubuntu font-medium text-[12px] text-white">
            $4.0m
          </span>
        </div>
      </div>

      <h3 className="font-ubuntu font-medium text-[18px] text-white mt-[15px]">
        Base vAPY
      </h3>
      <div className="mt-[10px]">
        <p className="font-ubuntu font-normal text-[10px] text-dtext">
          Variable APY based on todays trading activity.
        </p>
        <p className="font-ubuntu font-normal text-[10px] text-[#FED519] underline cursor-pointer">
          Click here to learn more about Base vAPY.
        </p>
      </div>

      <div className="flex justify-between mt-[21px]">
        <div className="flex flex-col justify-center items-center w-[151px] h-[47px] bg-banner rounded-tl-[10px] rounded-bl-[10px]">
          <span className="font-ubuntu font-normal text-[12px] text-dtext">
            Daily
          </span>
          <span className="font-ubuntu font-medium text-[14px] text-white">
            1.742%
          </span>
        </div>
        <div className="flex flex-col justify-center items-center w-[151px] h-[47px] bg-banner rounded-tr-[10px] rounded-br-[10px]">
          <span className="font-ubuntu font-normal text-[12px] text-dtext">
            Weekly
          </span>
          <span className="font-ubuntu font-medium text-[14px] text-white">
            2.019%
          </span>
        </div>
      </div>

      <h3 className="font-ubuntu font-medium text-[18px] text-white mt-[14px]">
        Rewards tAPR
      </h3>
      <div className="mt-[10px]">
        <p className="font-ubuntu font-normal text-[10px] text-dtext">
          Token APR based on current prices of tokens and reward rates.
        </p>
        <p className="font-ubuntu font-normal text-[10px] text-[#FED519] underline cursor-pointer">
          Click here to learn more about Boosting your CRV rewards.
        </p>
      </div>

      <div className="flex justify-between mt-[15px]">
        <span className="font-ubuntu font-normal text-[11px] text-dtext">
          CRV
        </span>
        <span className="font-ubuntu font-normal text-[12px] text-white">
          5.05% CRV
        </span>
      </div>*/}
    </div>
  );
};

export default InfoPanel;
