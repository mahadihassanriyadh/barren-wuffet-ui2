import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./FundTabs.module.css";

const FundTabs: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv30}>
      <img className={styles.rectangleIcon} alt="" src="../locofy/rectangle-4.svg" />
      <Link className="App-header-link-main" to="/fund/trading">
        <div className={styles.tradingDiv + " " + styles.selected}>Trading</div>
      </Link>
      <img className={styles.rectangleIcon1} alt="" src="../locofy/rectangle-5.svg" />
      <Link className="App-header-link-main" to="/fund/yield">
        <div className={styles.yIeldDiv}>Yield</div>
      </Link>
      <div className={styles.rectangleDiv16} />
      <Link className="App-header-link-main" to="/fund/portfolio">
        <div className={styles.portfolioDiv}>Portfolio</div>
      </Link>
    </div>
  );
};

export default FundTabs;
