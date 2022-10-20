import React, { FunctionComponent, useEffect } from "react";
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
      <div>
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
  useEffect(() => {
    document.title = "Barren Wuffet | Fund Trading";
  }, []);

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
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="md:basis-3/4">
          <div className="bg-gray-dark text-white mx-5 mb-10 rounded-xl px-8 py-1">
            <PriceChart
              title={"USD/ETH"}
              priceFeed={() => []}
              fromToken={fromTokenAddress}
              toToken={toTokenAddress}
            />
          </div>
          <div className="bg-gray-dark text-white mx-5 mb-10 rounded-xl px-8 py-1">
            <OrderList />
          </div>
        </div>
        <div className="md:basis-1/4">
          <div className="bg-gray-dark text-white mx-5 mb-10 rounded-xl px-8 py-1">
            <SwapBox tokens={tokens} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundTrading;
