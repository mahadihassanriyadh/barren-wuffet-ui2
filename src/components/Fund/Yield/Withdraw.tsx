import { t } from "@lingui/macro";
import Tabs from "../../Tabs/Tabs";

const WithdrawAmount = () => {
  return (
    <div className="select-none">
      <div className="mb-[21px]"></div>
    </div>
  );
};

const Unstake = () => {
  return (
    <div className="select-none">
      <div className="mb-[21px]"></div>
    </div>
  );
};

const Withdraw = () => {
  return (
    <div className="mt-[23px] mb-[9px]">
      <Tabs
        options={[
          {
            label: t`Withdraw`,
            content: <WithdrawAmount />,
          },
          {
            label: t`Unstake`,
            content: <Unstake />,
          },
        ]}
      />
    </div>
  );
};

export default Withdraw;
