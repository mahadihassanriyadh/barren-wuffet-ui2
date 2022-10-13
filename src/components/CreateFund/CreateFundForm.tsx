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
import Button from "../Form/Button";
import { TextArea } from "../Form/TextArea";
import { formatDate } from "../../data/formatting";

const TELEGRAM_PREFIX = "https://t.me/";
const TWITTER_PREFIX = "https://twitter.com/";
const DISCORD_PREFIX = "https://discord.gg/";

type Event = { target: { value: string } };
const CreateFundForm: FunctionComponent = () => {
  const [telegram, setTelegram] = useState(TELEGRAM_PREFIX);
  const [twitter, setTwitter] = useState(TWITTER_PREFIX);
  const [discord, setDiscord] = useState(DISCORD_PREFIX);
  const [fundName, setFundName] = useState("");
  const [about, setAbout] = useState("");
  const [strategy, setStrategy] = useState("");
  const [amountRaised, setAmountRaised] = useState(10000);
  const [closeDate, setCloseDate] = useState(new Date("2022-10-20"));
  const [fees, setFees] = useState(1);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSocialFn = (prefix: string) => {
    return (e: Event) => {
      const value = e.target.value;
      if (value.startsWith(prefix)) {
        return value;
      }
      return prefix + value;
    };
  };

  const handleTelegram = (e: Event) => {
    setTelegram(handleSocialFn(TELEGRAM_PREFIX)(e));
  };
  const handleTwitter = (e: Event) => {
    setTwitter(handleSocialFn(TWITTER_PREFIX)(e));
  };
  const handleDiscord = (e: Event) => {
    setDiscord(handleSocialFn(DISCORD_PREFIX)(e));
  };
  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError("");
  };
  return (
    <div className="bg-[#1c1b25] mt-10 py-20 px-14 rounded-2xl shadow-xl text-white mx-6">
      <CreateFundThanks isHidden={!isSubmitted} />
      <div className={isSubmitted ? "hidden" : ""}>
        <form onSubmit={handleFormSubmit}>
          {error && <Error error={error} />}
          <p className="text-lg font-bold">
            <Trans>Information about your fund</Trans>
          </p>
          <div className="mt-4 space-y-3">
            <Input
              type="text"
              name={t`Fund Name`}
              id="fundName"
              value={fundName}
              onChange={(e) => setFundName(e.target.value)}
              placeholder={t`Your Fund Name`}
              required
            />
            <TextArea
              name={t`About This Fund`}
              id="about"
              value={about}
              placeholder={t`About`}
              required
              onChange={(e) => setAbout(e.target.value)}
            />
            <TextArea
              name={t`Fund Strategy`}
              id="strategy"
              value={strategy}
              onChange={(e) => setStrategy(e.target.value)}
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
              onChange={(e) => setAmountRaised(parseFloat(e.target.value))}
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
                onChange={(e) => {
                  const newDate = new Date(e.target.value);
                  if (newDate.getTime() > new Date().getTime()) {
                    setCloseDate(newDate);
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
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setFees(val < 100 && val >= 0 ? val : 0);
                }}
                required
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
