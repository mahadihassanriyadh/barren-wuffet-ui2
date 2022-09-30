import React from "react";
import { FunctionComponent } from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

import { Trans } from "@lingui/macro";

const About: FunctionComponent = () => {
  return (
    <div className={styles.aboutDiv}>
      <img
        className={styles.ellipseIcon}
        alt=""
        src="../locofy/ellipse-36.svg"
      />
      <img
        className={styles.ellipseIcon1}
        alt=""
        src="../locofy/ellipse-351.svg"
      />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.roundCubeIcon}
        alt=""
        src="../locofy/round-cube@2x.png"
      />
      <img
        className={styles.roundCubeIcon1}
        alt=""
        src="../locofy/round-cube1@2x.png"
      />
      <img
        className={styles.ellipseIcon2}
        alt=""
        src="../locofy/ellipse-29.svg"
      />
      <img
        className={styles.pieChartRound}
        alt=""
        src="../locofy/pie-chart-round@2x.png"
      />
      <img
        className={styles.pieChartRound1}
        alt=""
        src="../locofy/pie-chart-round1@2x.png"
      />
      <div className={styles.forInvestorsAndDAOs}>
        For investors and DAOs 🌟
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.forTradersMoneyManagers}>
          For traders, money managers 🧑‍💼
        </div>
        <div className={styles.ifYouAreARaiseCapitalEas}>
          If you are a Raise capital easily and scale up your investment and
          trading strategies. Decide on the fund size, the duration of
          management and the profit share amounts. Market it to your community
          and help them increase their returns.
        </div>
      </div>
      <div className={styles.getAccessToSomeOfTheBest}>
        <p className={styles.getAccessTo}>
          get access to some of the best fund managers to help you grow your
          investments. Browse through their history, which is recorded onchain
          and cannot be manipulated, to filter the best from the rest.
        </p>
      </div>
      <div className={styles.haveAPeaceOfMindWithThe}>
        Have a peace of mind with the guardrails we have implemented that
        prevents the siphoning of funds by the fund managers. Fund mangers
        cannot access the funds directly, are only able to interact with
        whitelisted protocols and tokens.
      </div>
      <b className={styles.about}>About</b>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../locofy/rectangle-2341.svg"
      />
      <div className={styles.setupTradeAndInvestmentStr}>
        Setup trade and investment strategies across the following applications
      </div>
      <div className={styles.groupDiv1}>
        <img className={styles.dOPEXIcon} alt="" src="../locofy/dopex.svg" />
        <img
          className={styles.image107Icon}
          alt=""
          src="../locofy/image-107@2x.png"
        />
      </div>
      <img
        className={styles.icGmxFootere7821eb21Icon}
        alt=""
        src="../locofy/ic-gmx-footere7821eb2-1.svg"
      />
      <img
        className={styles.groupIcon}
        alt=""
        src="../locofy/group-237664.svg"
      />
      <img
        className={styles.groupIcon1}
        alt=""
        src="../locofy/group-237666@2x.png"
      />
      <div className={styles.groupDiv2}>
        <img
          className={styles.curveFinanceIcon}
          alt=""
          src="../locofy/curve-finance.svg"
        />
        <img
          className={styles.image109Icon}
          alt=""
          src="../locofy/image-109@2x.png"
        />
      </div>
      <div className={styles.ourAutomationToolsWillBrin}>
        Our automation tools will bring you pro trading tools to give you the
        edge in trading across decentralised protocols, just like a centralised
        exchange, but without the fear of losing access toy our funds.
      </div>
      <Link className="default-btn" to="/create-fund">
        <Trans>Create Fund</Trans>
      </Link>
      <img className={styles.saly31Icon} alt="" src="../locofy/saly31@2x.png" />
      <Link className="default-btn" to="/fund/trading">
        <Trans>Create Fund</Trans>
      </Link>

      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../locofy/ellipse-361.svg"
      />
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.nOKYCDiv}>NO KYC</div>
        <div className={styles.fundsAreInCustodyOfSmart}>
          Funds are in custody of smart contracts while being managed and
          returned to investors at the ned of the term
        </div>
        <div className={styles.completelyDecentralisedWeA}>
          Completely decentralised. we are thinking through decentralisation
          from the front end (IPFS), backend (AKash), protocol (token
          holders/dao)
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv2} />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv2} />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv2} />
        </div>
        <div className={styles.livingUpToTheDecentralised}>
          Living up to the decentralised philosophy:
        </div>
      </div>
      <img className={styles.cone2Icon} alt="" src="../locofy/cone2@2x.png" />
      <img
        className={styles.womanPose03}
        alt=""
        src="../locofy/woman-pose--03@2x.png"
      />
      <img className={styles.saly1Icon} alt="" src="../locofy/saly1@2x.png" />
      <img
        className={styles.umbrellaIsoColorIcon}
        alt=""
        src="../locofy/umbrellaisocolor@2x.png"
      />
      <img
        className={styles.moneyBagIsoColorIcon}
        alt=""
        src="../locofy/moneybagisocolor@2x.png"
      />
      <img
        className={styles.sheildIsoColorIcon}
        alt=""
        src="../locofy/sheildisocolor@2x.png"
      />
      <img
        className={styles.manPose03}
        alt=""
        src="../locofy/man-pose--03@2x.png"
      />
      <div className={styles.rectangleDiv5} />
    </div>
  );
};

export default About;
