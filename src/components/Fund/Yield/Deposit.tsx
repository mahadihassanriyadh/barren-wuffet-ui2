import { useState } from "react";

import { ReactComponent as InfoIcon } from "../../../img/icons/info.svg";
import Tabs from "../../Tabs/Tabs";
import { t } from "@lingui/macro";
import Checkbox from "../../Form/Checkbox";
import { getTokens } from "../../../config/tokens";
import { useNetwork } from "wagmi";
import { Input } from "../../Form/Input";
import { BigNumber } from "ethers";
import Button from "../../Button/Button";
import { Pool } from "../../../api/models";

const DepositAssets = ({ pool }: { pool: Pool }) => {
  const [tokenValues, setTokenValues] = useState<BigNumber[]>([]);
  const { chain } = useNetwork();
  console.log(pool);
  return (
    <div className="mb-[13px]">
      {pool.tokens.map((a, i) => (
        <Input
          label={a.symbol}
          value={tokenValues?.[i] || 0}
          onChange={(val) =>
            setTokenValues(tokenValues.map((v, j) => (j === i ? val : v)))
          }
          decimals={a.decimals}
          icon={a.logoURI}
          type="bignumber"
        />
      ))}
    </div>
  );
};
const DepositTab = ({ pool }: { pool: Pool }) => {
  const [depositWrapped, setDepositWrapped] = useState(false);
  const [tokenValues, setTokenValues] = useState<BigNumber[]>([]);
  const { chain } = useNetwork();

  return (
    <div className="select-none">
      <DepositAssets pool={pool} />

      {/* <Checkbox
        label="Deposit Wrapped"
        isChecked={depositWrapped}
        setIsChecked={setDepositWrapped}
      /> */}

      <div className="flex justify-between mt-[24px]">
        <span className="font-ubuntu text-white font-normal text-[14px]">
          Min. Curve steth LP Tokens
        </span>
        <span className="font-ubuntu text-white text-[14px] w-[35px]">-</span>
      </div>
      <div className="flex justify-between mt-[8px] mb-[24px]">
        <span className="font-ubuntu text-white font-normal text-[14px]">
          Slippage
        </span>
        <span className="font-ubuntu text-white text-[14px] w-[35px]">- %</span>
      </div>

      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
};

const StakeTab = () => {
  const [lpAsset, setLpAsset] = useState(BigNumber.from(0));
  const asset = getTokens(5)[0];

  return (
    <div className="select-none">
      <div className="mb-[21px]">
        <Input
          label={asset.name}
          value={lpAsset}
          onChange={setLpAsset}
          decimals={asset.decimals}
          icon={asset.logoURI}
          type="bignumber"
        />
      </div>

      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
};

const DepositAndStakeTab = ({ pool }: { pool: Pool }) => {
  return (
    <div className="select-none">
      <DepositAssets pool={pool} />

      <div className="flex justify-between">
        <span className="font-ubuntu text-white font-normal text-[14px]">
          Min. Curve steth LP Tokens
        </span>
        <span className="font-ubuntu text-white text-[14px] w-[35px] flex items-center">
          -
          <InfoIcon className="ml-[6px]" />
        </span>
      </div>
      <div className="flex justify-between mt-[8px] mb-[24px]">
        <span className="font-ubuntu text-white font-normal text-[14px]">
          Slippage
        </span>
        <span className="font-ubuntu text-white text-[14px] w-[35px]">- %</span>
      </div>

      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
};

const Deposit = ({ pool }: { pool: Pool }) => {
  return (
    <div className="mt-[23px] mb-[9px]">
      <Tabs
        options={[
          {
            label: t`Deposit`,
            content: <DepositTab pool={pool} />,
          },
          // {
          //   label: t`Stake`,
          //   content: <StakeTab />,
          // },
          // {
          //   label: t`Deposit & Stake`,
          //   content: <DepositAndStakeTab />,
          // },
        ]}
      />
    </div>
  );
};

export default Deposit;
