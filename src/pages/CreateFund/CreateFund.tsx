import { FunctionComponent } from "react";
import CreateFundForm from "../../components/CreateFund/CreateFundForm";
import Footer from "../../components/Footer/Footer";
import styles from "./CreateFund.module.css";

const CreateFund: FunctionComponent = () => {
  return (
    <div className={styles.createFundDiv}>
      <div />
      <b>Create Fund</b>
      <CreateFundForm />
      <Footer />
    </div>
  );
};

export default CreateFund;
