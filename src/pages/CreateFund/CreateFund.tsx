import React from "react";
import { FunctionComponent } from "react";
import CreateFundForm from "../../components/CreateFund/CreateFundForm";
import styles from "./CreateFund.module.css";

const CreateFund: FunctionComponent = () => {
  return (
    <div className={styles.createFundDiv}>
      <div />
      <b>Create Fund</b>
      <CreateFundForm />
    </div>
  );
};

export default CreateFund;
