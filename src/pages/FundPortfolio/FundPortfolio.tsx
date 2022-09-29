import React from "react";
import { ethers } from "ethers";

import FundBanner from "../../components/Fund/FundBanner";
import Footer from "../../components/Footer/Footer";
import { Trans } from "@lingui/macro";

export default function FundPortfolio() {
  const assetBalances = [
    {
      asset: "BTC",
      balance: 30,
    },
    {
      asset: "ETH",
      balance: 40,
    },
  ];
  const protocolBalances = [
    {
      protocol: "Curve",
      balance: 29,
    },
    {
      protocol: "Dopex",
      balance: 46,
    },
  ];

  return (
    <div className="Exchange page-layout">
      <FundBanner />
      <div className="Exchange-content">
        <div className="Exchange-left">
          <div className="App-box App-box-border">
            <div className="DashboardV2-projects">
              {assetBalances.map((asset) => (
                <div className="App-card" key={asset.asset}>
                  <div className="App-card-title">{asset.asset}</div>
                  {/* <div className="App-card-divider"></div> */}
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div>{asset.balance}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="DashboardV2-projects">
              {protocolBalances.map((protocol) => (
                <div className="App-card" key={protocol.protocol}>
                  <div className="App-card-title">
                    Assets on {protocol.protocol}
                  </div>
                  {/* <div className="App-card-divider"></div> */}
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div>{protocol.balance}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
