import { useState } from "react";

import { ReactComponent as InfoIcon } from "../../../img/icons/info.svg";
import Tabs from "../../Tabs/Tabs";
import { t } from "@lingui/macro";
import Checkbox from "../../Form/Checkbox";
import ErrorDisplay from "../../ui/Error";
import { getTokens, Token } from "../../../config/tokens";
import { useNetwork } from "wagmi";
import { Input } from "../../Form/Input";
import { BigNumber } from "ethers";
import Button from "../../Button/Button";
import { Pool } from "../../../api/models";
import { usePrepareAddLPRule } from "../../../api/yield";
import { useFund } from "../../../pages/FundManage/FundManage";
import { useConnectAndWrite } from "../../../api/rpc";

const DepositAssets = ({
  tokens,
  tokenValues,
  setTokenValues,
}: {
  tokens: Token[];
  tokenValues: BigNumber[];
  setTokenValues: (tokenValues: BigNumber[]) => void;
}) => {
  return (
    <div className="mb-[13px]">
      {tokens.map((a, i) => (
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
const DepositTab = ({
  pool,
  depositAndStake, // ignore for now
}: {
  pool: Pool;
  depositAndStake: boolean;
}) => {
  const [depositWrapped, setDepositWrapped] = useState(false);
  const [tokenValues, setTokenValues] = useState<BigNumber[]>([]);
  const fund = useFund();
  const [isSaving, setIsSaving] = useState(false);
  const fees = tokenValues.map((t) => BigNumber.from("0"));
  const limitValues = tokenValues.map((t) => BigNumber.from("0"));

  const { isLoading, error, isSuccess, write } = usePrepareAddLPRule({
    fundId: fund.id,
    liquidityPool: pool.id,
    tokenA: pool.tokens?.[0],
    tokenB: pool.tokens?.[1],
    minAmountOfBPerA: limitValues?.[0] || BigNumber.from("0"),
    minAmountOfAPerB: limitValues?.[1] || BigNumber.from("0"),
    collaterals: tokenValues,
    fees: fees,
  });

  useConnectAndWrite(isSaving, setIsSaving, write);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSaving(true);
  };

  return depositAndStake ? (
    <div>Staking not implemented</div>
  ) : (
    <div>
      <form onSubmit={handleFormSubmit}>
        {error && <ErrorDisplay error={error.message} />}
        {pool?.tokens?.length > 0 && (
          <DepositAssets
            tokens={pool.tokens}
            tokenValues={tokenValues}
            setTokenValues={setTokenValues}
          />
        )}

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
          <span className="font-ubuntu text-white text-[14px] w-[35px]">
            - %
          </span>
        </div>

        <div className="flex justify-center mt-10">
          <Button type="submit" label={t`Confirm`} />
        </div>
      </form>
    </div>
  );
};

const StakeTab = () => {
  const [lpAsset, setLpAsset] = useState(BigNumber.from(0));
  const asset = getTokens(5)[0];

  return (
    <div>
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

const Deposit = ({ pool }: { pool: Pool }) => {
  return (
    <div className="mt-[23px] mb-[9px]">
      <Tabs
        options={[
          {
            label: t`Deposit`,
            content: <DepositTab pool={pool} depositAndStake={false} />,
          },
          // {
          //   label: t`Stake`,
          //   content: <StakeTab />,
          // },
          {
            label: t`Deposit & Stake`,
            content: <DepositTab pool={pool} depositAndStake={true} />,
          },
        ]}
      />
    </div>
  );
};

export default Deposit;
