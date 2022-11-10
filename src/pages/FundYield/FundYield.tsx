import React, { FunctionComponent, useEffect, useState } from "react";
import { t } from "@lingui/macro";
import { useNetwork } from "wagmi";

import { Address, getTokens } from "../../config/tokens";

import SwapBox from "../../components/SwapBox/SwapBox";
import ActionSelector from "../../components/Fund/ActionSelector";
import Tabs from "../../components/Tabs/Tabs";

import { Action, ActionTypes } from "../../config/actions";
import PoolsList from "../../components/Fund/PoolsList";
import { useParams } from "react-router-dom";
import OpenOrders from "../../components/Fund/OpenOrders";

const FundYield = () => {
  useEffect(() => {
    document.title = "Barren Wuffet | Fund Yield";
  }, []);

  const { chain } = useNetwork();
  const { fundId } = useParams<{ fundId: Address }>();
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
                content: <OpenOrders />,
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
    <div className="container mx-auto">
      <div className="mx-5 mb-10 rounded-xl px-8 py-12 bg-gray-dark text-white">
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
            <PoolsList />
          </div>
        </div>
        <div className="Exchange-right">Side bar</div>
        <div className="Exchange-lists small">
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default FundYield;
