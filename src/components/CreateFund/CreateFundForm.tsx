import { FunctionComponent, SetStateAction, useState } from "react";
import telegramIcon from "../../img/icons/telegramYellowIcon.svg";
import twitterIcon from "../../img/icons/twitterYellowIcon.svg";
import discordIcon from "../../img/icons/discordYellowIcon.svg";
import calendarIcon from "../../img/icons/calendarYellowIcon.svg";
import parcentageIcon from "../../img/icons/parcentageYellowIcon.svg";
import { Trans, t } from "@lingui/macro";

import Error from "../ui/Error";
import { Link } from "react-router-dom";

const TELEGRAM_PREFIX = "https://t.me/";
const TWITTER_PREFIX = "https://twitter.com/";
const DISCORD_PREFIX = "https://discord.gg/";

type Event = { target: { value: string } };
const CreateFundForm: FunctionComponent = () => {
  const [telegram, setTelegram] = useState(TELEGRAM_PREFIX);
  const [twitter, setTwitter] = useState(TWITTER_PREFIX);
  const [discord, setDiscord] = useState(DISCORD_PREFIX);
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
    <div className="bg-[#1c1b25] mt-10 py-20 px-14 rounded-2xl shadow-xl text-white">
      <CreateFundThanks isHidden={!isSubmitted} />
      <div className={isSubmitted ? "hidden" : ""}>
        <form onSubmit={handleFormSubmit}>
          {error && <Error error={error} />}
          <p>
            <Trans>Information about your fund</Trans>
          </p>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              name="fundName"
              id="fundName"
              className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5"
              placeholder="Your Fund Name"
              required
            />
            <textarea
              name="about"
              id="about"
              className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-3"
              placeholder="About"
              required
            ></textarea>
            <textarea
              name="strategy"
              id="strategy"
              className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-3"
              placeholder="Strategy"
              required
            ></textarea>
            <div className="flex justify-between space-x-8">
              <div className="relative w-full">
                <img
                  className="absolute right-4 top-3"
                  src={telegramIcon}
                  alt="telegram icon"
                />
                <input
                  onChange={handleTelegram}
                  value={telegram}
                  type="text"
                  name="telegram"
                  id="telegram"
                  className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3"
                  placeholder="Telegram"
                  required
                />
              </div>
              <div className="relative w-full">
                <img
                  className="absolute right-4 top-3"
                  src={twitterIcon}
                  alt="twitter icon"
                />
                <input
                  onChange={handleTwitter}
                  value={twitter}
                  type="text"
                  name="twitter"
                  id="twitter"
                  className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3"
                  placeholder="Twitter"
                  required
                />
              </div>
              <div className="relative w-full">
                <img
                  className="absolute right-4 top-3"
                  src={discordIcon}
                  alt="discord icon"
                />
                <input
                  onChange={handleDiscord}
                  value={discord}
                  type="text"
                  name="discord"
                  id="discord"
                  className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3"
                  placeholder="Discord Username"
                  required
                />
              </div>
            </div>
          </div>
          <p className="text-white mt-8">
            <Trans>Fund Setting</Trans>
          </p>
          <div className="mt-4 space-y-3">
            <input
              type="number"
              name="amountRaised"
              id="amountRaised"
              className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3"
              placeholder="Amounts being raised $"
              required
            />
            <div className="flex justify-between space-x-8">
              <div className="relative w-full">
                <img
                  className="absolute right-4 top-3"
                  src={calendarIcon}
                  alt="telegram icon"
                />
                <input
                  type="date"
                  name="durationOfRaise"
                  id="durationOfRaise"
                  className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3"
                  placeholder="Duration of raise"
                  required
                />
              </div>
              <div className="relative w-full">
                <img
                  className="absolute right-4 top-4"
                  src={parcentageIcon}
                  alt="telegram icon"
                />
                <input
                  type="number"
                  name="fees"
                  id="fees"
                  className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3"
                  placeholder="Fees"
                  required
                />
              </div>
            </div>
          </div>

          <div className="hover:text-orange-400 flex justify-center mt-10">
            <button
              type="submit"
              className="px-16 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-bold text-lg text-white"
            >
              <Trans>Create Fund</Trans>
            </button>
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
        <p className="mt-4">
          <Trans>Thank you! Your Fund was created!</Trans>
        </p>
        <p className="mt-4">{`🎉 `}</p>
      </div>
      <div className="mt-4">
        <Link to="/fund/portfolio">
          <button className="px-16 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-bold text-lg text-white">
            <Trans>START TRADING</Trans>
          </button>
        </Link>
      </div>
      <div className="mt-4">
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
