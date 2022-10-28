import { FunctionComponent, useState } from "react";
import telegramIcon from "../../img/icons/telegramYellowIcon.svg";
import twitterIcon from "../../img/icons/twitterYellowIcon.svg";
import discordIcon from "../../img/icons/discordYellowIcon.svg";
import calendarIcon from "../../img/icons/calendarYellowIcon.svg";
import percentageIcon from "../../img/icons/parcentageYellowIcon.svg";
import { Trans, t } from "@lingui/macro";

import Error from "../ui/Error";
import { Link } from "react-router-dom";
import { Input } from "../Form/Input";
import Button from "../Button/Button";
import { TextArea } from "../Form/TextArea";
import { formatDate } from "../../data/formatting";
import MultiSelector from "../Form/MultiSelector";
import { useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { getContract } from "../../config/addresses";
import BWContract from "../../contracts/BarrenWuffet.json";
import { Abi as AbiType } from "abitype";
import { BigNumber, ethers } from "ethers";
import { ERC20_DECIMALS } from "../../config/constants";
import { getEthToken } from "../../config/tokens";

const TELEGRAM_PREFIX = "https://t.me/";
const TWITTER_PREFIX = "https://twitter.com/";
const DISCORD_PREFIX = "https://discord.gg/";

const factoryContractABI = BWContract.abi;

const CreateFundForm: FunctionComponent = () => {
  const [telegram, setTelegram] = useState(TELEGRAM_PREFIX);
  const [twitter, setTwitter] = useState(TWITTER_PREFIX);
  const [discord, setDiscord] = useState(DISCORD_PREFIX);
  const [fundName, setFundName] = useState("");
  const [about, setAbout] = useState("");
  const [strategy, setStrategy] = useState("");
  const [amountRaised, setAmountRaised] = useState(10000);
  const [closeDate, setCloseDate] = useState(new Date());
  const [lockin, setLockin] = useState(
    new Date(new Date().getTime() + 86400000 * 10)
  );
  const [fees, setFees] = useState(1);

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
      fees,
      [], // whitelisted tokens
    ],
  });

  const { data, isLoading, error, isSuccess, status, write } =
    useContractWrite(config);

  const handleSocialFn = (prefix: string) => {
    return (value: string) => {
      if (value.startsWith(prefix)) {
        return value;
      }
      return prefix + value;
    };
  };

  const handleTelegram = (v: string) => {
    setTelegram(handleSocialFn(TELEGRAM_PREFIX)(v));
  };
  const handleTwitter = (v: string) => {
    setTwitter(handleSocialFn(TWITTER_PREFIX)(v));
  };
  const handleDiscord = (v: string) => {
    setDiscord(handleSocialFn(DISCORD_PREFIX)(v));
  };
  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    write?.();
  };

  return (
    <div className="bg-gray-dark mt-10 py-20 px-14 rounded-2xl shadow-xl text-white mx-6">
      <CreateFundThanks isHidden={!isSuccess} />
      <div className={!isSuccess ? "" : "hidden"}>
        <form onSubmit={handleFormSubmit}>
          {isLoading && <div>Submitting form..</div>}
          {error && <Error error={error.message} />}
          <p className="text-lg font-bold">
            <Trans>Information about your fund</Trans>
          </p>
          <div className="mt-4 space-y-3">
            <Input
              type="text"
              name={t`Fund Name`}
              id="fundName"
              value={fundName}
              onChange={(value) => setFundName(value)}
              placeholder={t`Your Fund Name`}
              required
            />
            <TextArea
              name={t`About This Fund`}
              id="about"
              value={about}
              placeholder={t`About`}
              required
              onChange={(value) => setAbout(value)}
            />
            <TextArea
              name={t`Fund Strategy`}
              id="strategy"
              value={strategy}
              onChange={(value) => setStrategy(value)}
              placeholder={t`Strategy`}
              required
            />
            <div className="flex justify-between space-x-8">
              <Input
                onChange={handleTelegram}
                icon={telegramIcon}
                value={telegram}
                type="text"
                name={t`Telegram Username`}
                id="telegram"
                placeholder={t`Telegram`}
                required
              />

              <Input
                onChange={handleTwitter}
                icon={twitterIcon}
                value={twitter}
                type="text"
                name={t`Twitter Username`}
                id="twitter"
                placeholder={t`Twitter`}
                required
              />

              <Input
                onChange={handleDiscord}
                icon={discordIcon}
                value={discord}
                type="text"
                name={t`Discord Username`}
                id="discord"
                placeholder={t`Discord Username`}
                required
              />
            </div>
          </div>
          <p className="text-white mt-8 text-lg font-bold">
            <Trans>Fund Setting</Trans>
          </p>
          <div className="mt-4 space-y-3">
            <Input
              type="number"
              name={t`Amount to be Raised for This Fund`}
              id="amountRaised"
              value={amountRaised}
              placeholder={t`Amounts being raised $`}
              onChange={(val) => setAmountRaised(parseFloat(val))}
              required
            />
            <div className="flex justify-between space-x-8">
              <Input
                type="date"
                icon={calendarIcon}
                value={formatDate(closeDate)}
                name={t`Closing Date of the Fund`}
                id="durationOfRaise"
                placeholder={t`Duration of raise`}
                onChange={(value) => {
                  const newDate = new Date(value);
                  if (newDate.getTime() > new Date().getTime()) {
                    setCloseDate(newDate);
                  }
                }}
                required
              />
              <Input
                type="date"
                icon={calendarIcon}
                value={formatDate(lockin)}
                name={t`Withdrawal Date from the fund`}
                id="lockin"
                placeholder={t`Fund withdrawal date`}
                onChange={(value) => {
                  const newDate = new Date(value);
                  if (newDate.getTime() > new Date().getTime()) {
                    setLockin(lockin);
                  }
                }}
                required
              />
              <Input
                type="number"
                icon={percentageIcon}
                value={fees}
                name={t`Fund Fees`}
                id="fees"
                placeholder={t`Fees`}
                onChange={(value) => {
                  const val = parseFloat(value);
                  setFees(val < 100 && val >= 0 ? val : 0);
                }}
                required
              />
            </div>
            <div className="flex justify-between space-x-8">
              <MultiSelector
                label={t`Whitelist tokens`}
                items={[
                  { id: 1, name: "ETH" },
                  { id: 2, name: "SUSHI" },
                  { id: 3, name: "UNI" },
                  { id: 4, name: "CRV" },
                  { id: 5, name: "DPX" },
                  { id: 6, name: "RDPX" },
                ]}
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button type="submit" label={t`Create Fund`} />
          </div>
        </form>
      </div>
    </div>
  );
};

function CreateFundThanks(props: { isHidden: boolean }) {
  const { isHidden } = props;
  return (
    <div className={isHidden ? "hidden" : ""}>
      <div>
        <p className="text-6xl text-center py-2">🎉</p>
        <p className="mt-4 text-center text-xl py-1.5 rounded-md font-medium bg-green-800 bg-opacity-40">
          ✅ <Trans>Thank you! Your Fund was created!</Trans>
        </p>
      </div>
      <div className="mt-14">
        <Link to="/fund/portfolio">
          <Button label={t`START TRADING`} />
        </Link>
      </div>
      <div className="mt-4 text-gray-500 text-center">
        <Trans>
          If you are a trader, raise capital easily and scale up your investment
          and trading strategies. Decide on the fund size, the duration of
          management and the profit share amounts. Market it to your community
          and help them increase their returns.
        </Trans>
      </div>
    </div>
  );
}

export default CreateFundForm;
