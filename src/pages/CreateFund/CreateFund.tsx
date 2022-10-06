import React from "react";
import { FunctionComponent } from "react";
import CreateFundForm from "../../components/CreateFund/CreateFundForm";
import styles from "./CreateFund.module.css";

const CreateFund: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-20">
      <h1 className="text-5xl font-bold text-yellow-400 text-center">Create Fund</h1>
      <div className="container mx-auto">
        <CreateFundForm />
      </div>
    </div>
  );
};

export default CreateFund;
