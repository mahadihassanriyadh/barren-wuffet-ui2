import { FunctionComponent } from "react";
import styles from "./CreateFundForm.module.css";

const CreateFundForm: FunctionComponent = () => {
  return (
    <div className="bg-[#1c1b25] mt-10 py-20 px-14 rounded-2xl shadow-xl">
      <div>
        <form>
          <div />
          <div>Your Fund name</div>
          <div>Information about your fund</div>
          <div>Fund Settings</div>
        </form>
        <label>About</label>
        <textarea />
        <div>
          <div />
          <div>{`Telegram `}</div>
        </div>
        <div>
          <div />
          <div>Twitter</div>
        </div>
        <div>
          <div />
          <div>Discord</div>
        </div>
        <div>
          <div />
          <img alt="" src="../group-237674.svg" />
          <div>{`Duration of raise `}</div>
        </div>
        <div>
          <div />
          <div>{`Amount being raised, `}</div>
        </div>
        <div>
          <div />
          <div>Fees</div>
          <div>%</div>
        </div>
        <div>
          <div />
          <div>{`Strategy `}</div>
        </div>
        <button type="submit" className="">
          Create Fund
        </button>
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
