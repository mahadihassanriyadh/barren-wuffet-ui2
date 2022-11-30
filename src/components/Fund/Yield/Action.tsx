import { t } from "@lingui/macro";
import { Pool } from "../../../api/models";
import TabsMain from "../../Tabs/TabsMain";
import Deposit from "./Deposit";
import Swap from "./Swap";
import Withdraw from "./Withdraw";

const Action = ({ pool }: { pool: Pool }) => {
  return (
    <div className="mt-[10px] container mx-auto w-[350px] rounded-[15px] px-[15px] pt-[28px] pb-[26px] bg-card">
      <TabsMain
        options={[
          {
            label: t`DEPOSIT`,
            content: <Deposit pool={pool} />,
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
