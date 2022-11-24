import { t } from "@lingui/macro";
import TabsMain from "../../Tabs/TabsMain";
import Deposit from "./Deposit";
import Swap from "./Swap";
import Withdraw from "./Withdraw";

const Action = () => {
  return (
    <div className="mt-[10px] container mx-auto w-[350px] rounded-[15px] px-[15px] pt-[28px] pb-[26px] bg-card">
      <TabsMain
        options={[
          {
            label: t`DEPOSIT`,
            content: <Deposit />,
          },
          {
            label: t`WITHDRAW/CLAIM`,
            content: <Withdraw />,
          },
          // {
          //   label: t`SWAP`,
          //   content: <Swap />,
          // },
        ]}
      />
    </div>
  );
};

export default Action;
