import { FunctionComponent, useEffect, useState } from "react";
import { Trans, t } from "@lingui/macro";

import Error from "../ui/Error";

import { Input } from "../Form/Input";
import Button from "../Button/Button";
import FundsList from "../Fund/FundsList";
import TokenSelector from "../Form/TokenSelector";
import { getTokens } from "../../config/tokens";
import { useNetwork } from "wagmi";
import { useNavigate } from "react-router-dom";

const InvestForm: FunctionComponent = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100);
  const navigate = useNavigate();

  const { chain } = useNetwork();
  const tokens = chain ? getTokens(chain.id) : [];
  const [investmentToken, setInvestmentToken] = useState(tokens[0]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    // this might not be the best way to do this. check React Router Form and redirect
    if (isSubmitted) {
      navigate("/fund/portfolio");
    }
  }, [isSubmitted, navigate]);
  const [error, setError] = useState("");

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError("");
  };
  return (
    <div className="bg-gray-dark mt-10 py-20 px-14 rounded-2xl shadow-xl text-white mx-6">
      <FundsList />
      <div className={isSubmitted ? "hidden" : ""}>
        <form onSubmit={handleFormSubmit}>
          {error && <Error error={error} />}

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
              onChange={(value) => setInvestmentAmount(parseFloat(value))}
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
