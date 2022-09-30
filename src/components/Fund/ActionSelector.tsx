// @ts-nocheck
import React from "react";
import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

import "../Exchange/ChartTokenSelector.css";
import { getWhitelistedActions, ActionTypes } from "../../config/actions";

export default function ActionSelector(props) {
  const { chainId, selectedAction, onSelectAction, actionType } = props;

  const whitelistedActions = getWhitelistedActions(
    chainId,
    actionType || ActionTypes.Trading
  );

  const onSelect = async (action) => {
    onSelectAction(action);
  };

  var value = selectedAction || whitelistedActions[0];

  return (
    <Menu>
      <Menu.Button as="div">
        <button className={`App-cta small transparent chart-token-selector`}>
          <span className="chart-token-selector--current">{value?.name}</span>
          {<FaChevronDown />}
        </button>
      </Menu.Button>
      <div className="chart-token-menu">
        <Menu.Items as="div" className="menu-items chart-token-menu-items">
          {whitelistedActions.map((option, index) => (
            <Menu.Item key={index}>
              <div
                className="menu-item"
                onClick={() => {
                  onSelect(option);
                }}
              >
                <span style={{ marginLeft: 5 }} className="token-label">
                  {option.name}
                </span>
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
}
