import React, { FunctionComponent, useEffect, useState } from "react";
import { t } from "@lingui/macro";
import { useNetwork } from "wagmi";

import { getTokens } from "../../config/tokens";

import ActionSelector from "../../components/Fund/ActionSelector";
import Tabs from "../../components/Tabs/Tabs";

import { Action, ActionTypes } from "../../config/actions";
import Yield from "../../components/Fund/Yield/";
import OpenOrders from "../../components/Fund/OpenOrders";
import { useFund } from "../FundManage/FundManage";

const FundYield = () => {
  const [actionToPerform, setActionToPerform] = useState<Action>();
  useEffect(() => {
    document.title = "Barren Wuffet | Fund Yield";
  }, []);

  const { chain } = useNetwork();
  const fund = useFund();
  const fundId = fund?.id;

  // const tokens = chain ? getTokens(chain.id, fundId) : [];

  const OrderList: FunctionComponent = () => {
    return (
      <div>
        <div>
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
      <div className="flex flex-row ">
        <div className="md:basis-3/4">
          <div className="bg-gray-dark mx-5 mb-2 rounded-xl px-5 py-5">
            {chain && (
              <ActionSelector
                chainId={chain.id}
                selectedAction={actionToPerform}
                onSelectAction={setActionToPerform}
                actionType={ActionTypes.Trading}
              />
            )}
          </div>
          <div className="bg-gray-dark mx-5 mb-10 rounded-xl px-8 py-1">
            <OrderList />
          </div>
        </div>
        <div className="md:basis-1/4">
          <div className="bg-gray-dark mx-5 mb-10 rounded-xl px-8 py-1">
            <Yield.InfoPanel />
            <Yield.Action />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundYield;
