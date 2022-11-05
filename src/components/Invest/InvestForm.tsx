import { FunctionComponent, useEffect, useState } from "react";
import { Trans, t } from "@lingui/macro";

import Error from "../ui/Error";

import { Input } from "../Form/Input";
import Button from "../Button/Button";
import { SelectFundsList } from "../Fund/FundsList";
import TokenSelector from "../Form/TokenSelector";
import { getTokens } from "../../config/tokens";
import { ContractResultDecodeError, useAccount, useNetwork } from "wagmi";
import { useNavigate } from "react-router-dom";
import { useConnectAndWrite, usePrepareSubscribeToFund } from "../../api/rpc";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const InvestForm: FunctionComponent = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100);

  const { chain } = useNetwork();
  const tokens = chain ? getTokens(chain.id) : [];
  const [investmentToken, setInvestmentToken] = useState(tokens[0]);
  const [selectedFundId, setSelectedFundId] = useState<string | undefined>(
    undefined
  );
  const [isSaving, setIsSaving] = useState(false);

  const { isLoading, error, isSuccess, write } = usePrepareSubscribeToFund({
    fundId: selectedFundId,
    // investmentToken,
    amount: investmentAmount,
    eventCallback: ({ sender, token, amount }) => {},
  });

  useConnectAndWrite(isSaving, setIsSaving, write);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSaving(true);
  };
  return (
    <div className="bg-gray-dark mt-10 py-20 px-14 rounded-2xl shadow-xl text-white mx-6">
      {isSuccess && (
        <div>
          ✅ <Trans>Thank you! {investmentAmount} has been invested</Trans>
        </div>
      )}
      <SelectFundsList
        selectedFundId={selectedFundId}
        setSelectedFundId={setSelectedFundId}
      />
      <div className={isSaving ? "hidden" : ""}>
        <form onSubmit={handleFormSubmit}>
          {error && <Error error={error.message} />}

          <div className="mt-4 space-y-3">
            <TokenSelector
              tokens={tokens}
              selectedToken={investmentToken}
              setSelectedToken={setInvestmentToken}
            />
            <Input
              type="number"
              name={t`Investment Amount`}
              id="investmentAmount"
              value={investmentAmount}
              placeholder={t`Investment Amount $`}
              onChange={(value) => value && setInvestmentAmount(value)}
              required
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button type="submit" label={t`Invest`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvestForm;
