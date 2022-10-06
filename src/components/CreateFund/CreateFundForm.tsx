import { FunctionComponent } from "react";
import styles from "./CreateFundForm.module.css";

const CreateFundForm: FunctionComponent = () => {
  return (
    <div className="bg-[#1c1b25] mt-10 py-20 px-14 rounded-2xl shadow-xl">
      <div>
        <form >
          <p className="text-white">Information about your fund</p>
          <div className="mt-4 space-y-3">
            <input type="text" name="fundName" id="fundName" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5" placeholder="Your Fund Name" required />
            <textarea name="about" id="about" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-2.5" placeholder="About" required></textarea>
            <textarea name="strategy" id="strategy" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-2.5" placeholder="Strategy" required></textarea>
            <div>
              <div>
                <img src="" alt="" />
                <input type="text" name="fundName" id="fundName" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5" placeholder="Your Fund Name" required />
              </div>
            </div>
          </div>
          <div>Fund Settings</div>
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
