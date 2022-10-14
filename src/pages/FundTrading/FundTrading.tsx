import React, { FunctionComponent } from "react";
import { t } from "@lingui/macro";
import { ethers } from "ethers";
import { useNetwork } from "wagmi";

import { USD_DECIMALS, formatAmount } from "../../data/formatting";

import { getContract } from "../../config/addresses";
import { getTokens } from "../../config/tokens";
import SwapBox from "../../components/Fund/SwapBox";
import PriceChart from "../../components/Charts/PriceChart";
import TradingOrders from "../../components/Fund/TradingOrders";
import Tabs from "../../components/Tabs/Tabs";

const { AddressZero } = ethers.constants;

const OrderList: FunctionComponent = (props) => {
  return (
    <div>
      <div className="Exchange-list-tab-container">
        <Tabs
          options={[
            {
              label: t`Positions`,
              content: <TradingOrders />,
            },
            {
              label: t`Orders`,
              content: <div>Orders stuff</div>,
            },
          ]}
        />
      </div>
    </div>
  );
};

const FundTrading = () => {
  const { chain } = useNetwork();

  const tokens = chain ? getTokens(chain.id) : [];

  const fromTokenAddress = tokens[0]?.address;
  const toTokenAddress = tokens[1]?.address;

  // const indexPricesUrl = getServerUrl(chainId, "/prices");
  // const { data: indexPrices } = useSWR([indexPricesUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  //   refreshInterval: 500,
  //   refreshWhenHidden: true,
  // });

  return (
    <div className="Exchange page-layout">
      <div className="Exchange-content">
        <div className="Exchange-left">
          <PriceChart
            title={"USD/ETH"}
            priceFeed={() => []}
            fromToken={fromTokenAddress}
            toToken={toTokenAddress}
          />
          <div className="Exchange-lists large">
            <OrderList />
          </div>
        </div>
        <div className="Exchange-right">
          <SwapBox tokens={tokens} />
        </div>
      </div>
    </div>
  );
};

export default FundTrading;
