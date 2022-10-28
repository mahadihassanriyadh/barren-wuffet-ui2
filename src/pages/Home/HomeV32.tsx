import React from "react";
import { FunctionComponent } from "react";
import styles from "./HomeV32.module.css";
import { t } from "@lingui/macro";
import { NavLink } from "react-router-dom";
import FundsList from "../../components/Fund/FundsList";
import Button from "../../components/Button/Button";
import FAQ from "../../components/FAQ/FAQ";
import faqs from "../../config/faqs";

const HomeV32: FunctionComponent = () => {
  return (
    <div className={styles.homeV32Div}>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.impressiveNumbers}>Impressive numbers 🤩</div>
        </div>
      </div>

      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <div className={styles.groupDiv4}>
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv1} />
              <img
                className={styles.dollarIsoColorIcon}
                alt=""
                src="../locofy/dollarisocolor@2x.png"
              />
            </div>
          </div>
          <div className={styles.groupDiv6}>
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv1} />
              <img
                className={styles.dollarIsoColorIcon}
                alt=""
                src="../locofy/rocketisocolor@2x.png"
              />
            </div>
          </div>
          <div className={styles.groupDiv8}>
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv1} />
              <img
                className={styles.dollarIsoColorIcon}
                alt=""
                src="../locofy/boyisocolor@2x.png"
              />
            </div>
          </div>
          <div className={styles.groupDiv10}>
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv1} />
              <img
                className={styles.dollarIsoColorIcon}
                alt=""
                src="../locofy/lockerisocolor@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <b className={styles.b}>$ 54,791,500</b>
        </div>
        <div className={styles.groupDiv13}>
          <b className={styles.b}>{`71,640 `}</b>
        </div>
        <div className={styles.groupDiv14}>
          <b className={styles.b}>81,117</b>
        </div>
        <div className={styles.groupDiv15}>
          <b className={styles.b}>81,117</b>
        </div>
        <div className={styles.moneyInProtocol}>Money in protocol</div>
        <div className={styles.tradersAndInvestors}>Traders and investors</div>
        <div className={styles.investorsDiv}>Investors</div>
        <div className={styles.fundsDiv}>Funds</div>
      </div>
      <div className={styles.rectangleDiv5} />
      <div className={styles.poweredBy}>Powered by 💪</div>
      <div className={styles.groupDiv16}>
        <div className={styles.groupDiv17}>
          <b className={styles.decentralizedFundB}>Decentralized Fund</b>
          <div className={styles.anybodyWhoThinksTheyAreA}>
            Anybody who thinks they are a good trader can set up a defi fund
            that does not require KYC
          </div>
        </div>
      </div>
      <div className={styles.managingPlatformDiv}>Managing Platform</div>

      <div className={styles.groupDiv23}>
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.akarIconstwitterFill}
          alt=""
          src="../locofy/akariconstwitterfill.svg"
        />
        <div className={styles.rectangleDiv13} />
        <img
          className={styles.fagithubAltIcon}
          alt=""
          src="../locofy/fagithubalt.svg"
        />
        <div className={styles.telegramChatDiv}>Telegram chat</div>
        <div className={styles.twitterDiv}>Twitter</div>
        <div className={styles.gitHubDiv}>GitHub</div>
        <img
          className={styles.bxltelegramIcon}
          alt=""
          src="../locofy/bxltelegram.svg"
        />
      </div>
      <img
        className={styles.groupIcon1}
        alt=""
        src="../locofy/group-237612@2x.png"
      />
      <img
        className={styles.groupIcon2}
        alt=""
        src="../locofy/group-237618@2x.png"
      />
      <img
        className={styles.groupIcon3}
        alt=""
        src="../locofy/group-237617.svg"
      />
      <NavLink className="block" to="/create-fund">
        <Button label={t`Create Fund`} />
      </NavLink>
      <div className={styles.groupDiv24}>
        {/* <div className={styles.groupDiv25}>
          <div className={styles.textTextMediumMain}>
            <div className={styles.menuTitleDiv}>Markets</div>
          </div>
        </div>
        <div className={styles.tagPagginationOptionDiv} />
        <div className={styles.groupDiv26}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.tVLDiv}>TVL</div>
          </div>
          <div className={styles.groupDiv27}>
            <a className={styles.tagPagginationMain}>
              <div className={styles.tVLDiv}>New</div>
            </a>
            <div className={styles.tagPagginationMainDiv1}>
              <div className={styles.tVLDiv}>Best profit</div>
            </div>
            <div className={styles.tagPagginationMainDiv2}>
              <div className={styles.tVLDiv}>All</div>
            </div>
          </div>
        </div> */}
        <h2 className="font-sans text-5xl font-bold">Top funds 🔥</h2>
        <FundsList />
        <div>View all</div>
        <hr />
        <div>FAQs 🤔</div>
        <FAQ faqs={faqs} />
      </div>

      <img className={styles.bgIcon} alt="" src="../locofy/bg@2x.png" />
      <div className={styles.groupDiv53}>
        <div className={styles.walletDiv}>
          <div className={styles.balanceDiv}>
            <div className={styles.rectangleDiv19} />
            <div className={styles.groupDiv54}>
              <img
                className={styles.imageIconWallet}
                alt=""
                src="../locofy/imageicon--wallet.svg"
              />
              <div className={styles.textTextMediumMain1}>
                <div className={styles.menuTitleDiv1}>Estimated Balance</div>
              </div>
            </div>
            <div className={styles.div48}>$123,987</div>
            <div className={styles.frameDiv}>
              <div className={styles.monthlyProfitDiv}>Monthly Profit</div>
              <div className={styles.div49}>+$2560.78</div>
            </div>
            <img
              className={styles.akarIconseye}
              alt=""
              src="../locofy/akariconseye.svg"
            />
          </div>
          <div className={styles.groupDiv55}>
            <div className={styles.div50}>
              <div className={styles.groupDiv56}>
                <img
                  className={styles.imageIconBTC}
                  alt=""
                  src="../locofy/imageicon--btc.svg"
                />
                <div className={styles.frameDiv1}>
                  <div className={styles.bTCUSDTDiv}>BTCUSDT</div>
                  <div className={styles.bitcoinDiv}>Bitcoin</div>
                </div>
              </div>
              <div className={styles.div51}>$23,738</div>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="../locofy/vector2.svg"
              />
              <div className={styles.weeklyProfitDiv}>PNL Daily</div>
              <div className={styles.div52}>-$16.78</div>
              <div className={styles.tagPercentaceMainDiv8}>
                <div className={styles.div53}>+14.67%</div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv57}>
            <div className={styles.cardListCoinDiv}>
              <div className={styles.groupDiv56}>
                <img
                  className={styles.imageIconBTC}
                  alt=""
                  src="../locofy/imageicon--eth.svg"
                />
                <div className={styles.frameDiv1}>
                  <div className={styles.bTCUSDTDiv}>ETHUSDT</div>
                  <div className={styles.bitcoinDiv}>Ethereum</div>
                </div>
              </div>
              <div className={styles.div51}>$23,738</div>
              <img
                className={styles.vectorIcon3}
                alt=""
                src="../locofy/vector3.svg"
              />
              <div className={styles.weeklyProfitDiv}>PNL Daily</div>
              <div className={styles.div55}>+$189.91</div>
              <div className={styles.tagPercentaceMainDiv9}>
                <div className={styles.div53}>+24.68%</div>
              </div>
            </div>
            <img
              className={styles.vectorIcon4}
              alt=""
              src="../locofy/vector4.svg"
            />
          </div>
        </div>
        <img
          className={styles.groupIcon8}
          alt=""
          src="../locofy/group-237661.svg"
        />
      </div>
      <div className={styles.tagPercentaceMainDiv10}>
        <div className={styles.div53}>+14.67%</div>
      </div>
    </div>
  );
};

export default HomeV32;
