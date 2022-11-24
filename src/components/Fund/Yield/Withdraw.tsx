import { t } from "@lingui/macro";
import { BigNumber } from "ethers";
import { useState } from "react";
import { useNetwork } from "wagmi";
import { getTokens } from "../../../config/tokens";
import Button from "../../Button/Button";
import { Input } from "../../Form/Input";
import Tabs from "../../Tabs/Tabs";

const WithdrawAmount = () => {
  const { chain } = useNetwork();
  const [tokenValue, setTokenValue] = useState<BigNumber>(BigNumber.from(0));
  const a = chain ? getTokens(chain.id)?.[0] : undefined;
  return (
    <div className="select-none">
      <div className="mb-[21px]">
        {a && (
          <Input
            label={a.name}
            value={tokenValue || 0}
            onChange={(val) => setTokenValue(tokenValue)}
            decimals={a.decimals}
            icon={a.logoURI}
            type="bignumber"
          />
        )}
        <div className="flex justify-center mt-10">
          <Button type="submit" label={t`Confirm`} />
        </div>
      </div>
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
          // {
          //   label: t`Unstake`,
          //   content: <Unstake />,
          // },
        ]}
      />
    </div>
  );
};

export default Withdraw;
