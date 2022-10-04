import React from "react";
import styles from "./FundBanner.module.css";
import FundTabs from "../../components/FundTabs/FundTabs";

export default function FundBanner(props: any) {
  return (
    <div className={styles.groupDiv9}>
      <div className={styles.rectangleDiv26} />
      <img
        className={styles.ellipseIcon4}
        alt=""
        src="../locofy/ellipse-1916@2x.png"
      />
      <div className={styles.openSeaFundDiv}>OpenSea fund</div>
      <img className={styles.vectorIcon16} alt="" src="../locofy/vector6.svg" />
      <div className={styles.groupDiv11}>
        <div className={styles.groupDiv12}>
          <div className={styles.groupDiv12}>
            <div className={styles.groupDiv14}>
              <div className={styles.groupDiv14}>
                <div className={styles.shareDiv}>{`Share `}</div>
                <img
                  className={styles.groupIcon3}
                  alt=""
                  src="../locofy/group-2376731.svg"
                />
              </div>
            </div>
            <img
              className={styles.groupIcon4}
              alt=""
              src="../locofy/group-237682.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.div46}>$123,987</div>
      <img className={styles.vectorIcon17} alt="" src="../locofy/vector7.svg" />
      <div className={styles.portfolioValueDiv}>Portfolio value</div>
      <div className={styles.startingValue500}>Starting Value: $500</div>
      <div className={styles.div47}>+$2560.78</div>
      <div className={styles.tagPercentaceMainDiv7}>
        <div className={styles.div2}>+14.67%</div>
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.groupDiv17}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.hDiv}>24H</div>
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.dDiv}>1D</div>
        </div>
        <div className={styles.groupDiv19}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.dDiv}>7D</div>
        </div>
        <div className={styles.groupDiv20}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.mDiv}>1M</div>
        </div>
      </div>
      <div className={styles.groupDiv21}>
        <div className={styles.bMMk4gdD263q7QJt3VLWnG2x1mt9HVDiv}>
          8BMMk4gdD263q7QJt3VLWnG2x1mt9HV56b4vX774n4Sc
        </div>
        <img
          className={styles.groupIcon5}
          alt=""
          src="../locofy/group-237695.svg"
        />
        <img
          className={styles.groupIcon6}
          alt=""
          src="../locofy/group-237694.svg"
        />
      </div>
      <FundTabs />
      <div className={styles.groupDiv23}>
        <div
          className={styles.dataUpdated1minAgo}
        >{`Data updated 1min ago `}</div>
        <img
          className={styles.groupIcon7}
          alt=""
          src="../locofy/group-237699.svg"
        />
      </div>
      <img
        className={styles.vectorIcon18}
        alt=""
        src="../locofy/vector-85.svg"
      />
      <div className={styles.groupDiv24}>
        <div className={styles.expiryInDiv}>Expiry in:</div>
        <div className={styles.investorsDiv}>Investors:</div>
        <div className={styles.tagPercentaceMainDiv8}>
          <div className={styles.div2}>751 days</div>
        </div>
        <div className={styles.tagPercentaceMainDiv9}>
          <div className={styles.div2}>103</div>
        </div>
      </div>
    </div>
  );
}
