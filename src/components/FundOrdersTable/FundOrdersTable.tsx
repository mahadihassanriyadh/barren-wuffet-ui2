import { FunctionComponent } from "react";
import styles from "./FundOrdersTable.module.css";

const FundOrdersTable: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.allDiv}>All</div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.rectangleDiv3} />
          <div className={styles.openDiv}>Open</div>
          <div className={styles.historyDiv}>History</div>
        </div>
      </div>
      <div className={styles.ordersDiv}>Orders</div>
      <img
        className={styles.imageIconUser}
        alt=""
        src="../imageicon--user8.svg"
      />
      <div className={styles.bTCUSDTDiv}>BTCUSDT</div>
    </div>
  );
};

export default FundOrdersTable;
