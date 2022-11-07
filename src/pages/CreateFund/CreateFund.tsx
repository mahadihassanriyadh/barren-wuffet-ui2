import { Trans } from "@lingui/macro";
import React, { useEffect } from "react";
import { FunctionComponent } from "react";
import CreateFundForm from "../../components/CreateFund/CreateFundForm";

const CreateFund: FunctionComponent = () => {
  useEffect(() => {
    document.title = "Barren Wuffet | Create Fund";
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-20">
      <h1 className="text-5xl font-bold text-yellow-400 text-center">
        <Trans>Create Fund</Trans>
      </h1>
      <div className="container mx-auto">
        <CreateFundForm />
      </div>
    </div>
  );
};

export default CreateFund;
