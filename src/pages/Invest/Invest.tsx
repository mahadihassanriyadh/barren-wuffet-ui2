import React, { useEffect } from "react";
import { FunctionComponent } from "react";
import InvestForm from "../../components/Invest/InvestForm";

const CreateFund: FunctionComponent = () => {
  useEffect(() => {
    document.title = "Barren Wuffet | Create Fund";
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-20">
      <h1 className="text-5xl font-bold text-yellow-400 text-center">Invest</h1>
      <div className="container mx-auto">
        <InvestForm />
      </div>
    </div>
  );
};

export default CreateFund;
