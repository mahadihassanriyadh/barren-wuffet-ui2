import React, { FunctionComponent, useState } from "react";
import { t } from "@lingui/macro";
import { useNetwork } from "wagmi";

import { getTokens } from "../../config/tokens";

import SwapBox from "../../components/Fund/SwapBox";
import FundBanner from "../../components/Fund/FundBanner";
import ActionSelector from "../../components/Fund/ActionSelector";
import TradingOrders from "../../components/Fund/TradingOrders";
import Tabs from "../../components/Tabs/Tabs";

import { Action, ActionTypes } from "../../config/actions";
import PoolsList from "../../components/Fund/PoolsList";
import { getPools } from "../../api/pools";

const FundYield = () => {
  const { chain } = useNetwork();
  const [actionToPerform, setActionToPerform] = useState<Action>();

  const tokens = chain ? getTokens(chain.id) : [];

  const OrderList: FunctionComponent = () => {
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

  return (
    <div className="Exchange page-layout">
      <FundBanner />
      <div className="Exchange-content">
        <div className="Exchange-left">
          <div className="ExchangeChart-top App-box App-box-border">
            <div className="ExchangeChart-top-inner">
              <div>
                <div className="ExchangeChart-title">
                  {chain && (
                    <ActionSelector
                      chainId={chain.id}
                      selectedAction={actionToPerform}
                      onSelectAction={(action: Action) =>
                        setActionToPerform(action)
                      }
                      actionType={ActionTypes.Yield}
                    />
                  )}
                </div>
              </div>
              <div>
                <div className="ExchangeChart-title">
                  Amount Deposited: 1000
                </div>
              </div>
            </div>
          </div>
          <div className="Exchange-lists large">
            <PoolsList pools={getPools()} poolDataIsLoading={false} />
          </div>
        </div>
        <div className="Exchange-right">
          <SwapBox tokens={tokens} />
        </div>
        <div className="Exchange-lists small">
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default FundYield;
