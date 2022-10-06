import { FunctionComponent } from "react";
import styles from "./CreateFundForm.module.css";
import telegramIcon from "../../img/icons/telegramYellowIcon.svg"
import twitterIcon from "../../img/icons/twitterYellowIcon.svg"
import discordIcon from "../../img/icons/discordYellowIcon.svg"
import calendarIcon from "../../img/icons/calendarYellowIcon.svg"
import parcentageIcon from "../../img/icons/parcentageYellowIcon.svg"
import { NavLink } from "react-router-dom";

const CreateFundForm: FunctionComponent = () => {
  return (
    <div className="bg-[#1c1b25] mt-10 py-20 px-14 rounded-2xl shadow-xl">
      <div>
        <form >
          <p className="text-white">Information about your fund</p>
          <div className="mt-4 space-y-3">
            <input type="text" name="fundName" id="fundName" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5" placeholder="Your Fund Name" required />
            <textarea name="about" id="about" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-3" placeholder="About" required></textarea>
            <textarea name="strategy" id="strategy" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-3" placeholder="Strategy" required></textarea>
            <div className="flex justify-between space-x-8">
              <div className="relative w-full">
                <img className="absolute right-4 top-3" src={telegramIcon} alt="telegram icon" />
                <input value={"https://t.me/username"} type="text" name="telegram" id="telegram" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Telegram" required />
              </div>
              <div className="relative w-full">
                <img className="absolute right-4 top-3" src={twitterIcon} alt="telegram icon" />
                <input type="text" name="twitter" id="twitter" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Twitter" required />
              </div>
              <div className="relative w-full">
                <img className="absolute right-4 top-3" src={discordIcon} alt="telegram icon" />
                <input type="text" name="discord" id="discord" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Discord" required />
              </div>
            </div>
          </div>
          <p className="text-white mt-8">Fund Setting</p>
          <div className="mt-4 space-y-3">
            <input type="number" name="amountRaised" id="amountRaised" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Amounts being raised $" required />
            <div className="flex justify-between space-x-8">
              <div className="relative w-full">
                <img className="absolute right-4 top-3" src={calendarIcon} alt="telegram icon" />
                <input type="text" name="durationOfRaise" id="durationOfRaise" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Duration of raise" required />
              </div>
              <div className="relative w-full">
                <img className="absolute right-4 top-4" src={parcentageIcon} alt="telegram icon" />
                <input type="text" name="fees" id="fees" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Fees" required />
              </div>
            </div>
          </div>

          <NavLink className="hover:text-orange-400 flex justify-center mt-10" to="/fund/portfolio">
              <button className="px-16 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-bold text-lg text-white">
                Create Fund
              </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

const CreateFundThanks: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <div />
      <div>
        <p>Thank you! Your Fund was created</p>
        <p>&nbsp;</p>
        <p>{`🎉 `}</p>
      </div>
      <button>START TRADING</button>
      <b>Create Fund</b>
      <div>
        If you are a Raise capital easily and scale up your investment and trading strategies. Decide on the fund size,
        the duration of management and the profit share amounts. Market it to your community and help them increase
        their returns.
      </div>
    </div>
  );
};

export default CreateFundForm;
