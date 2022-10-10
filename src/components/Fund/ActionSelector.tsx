import React from "react";
import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

import {
  getWhitelistedActions,
  ActionTypes,
  Action,
} from "../../config/actions";

export default function ActionSelector(props: {
  chainId: number;
  selectedAction?: Action;
  onSelectAction?: (action: Action) => void;
  actionType: ActionTypes;
}) {
  const { chainId, selectedAction, onSelectAction, actionType } = props;

  const whitelistedActions = getWhitelistedActions(
    chainId,
    actionType || ActionTypes.Trading
  );

  return (
    <Menu>
      <Menu.Button as="div">
        <button className={`App-cta small transparent chart-token-selector`}>
          <span className="chart-token-selector--current">
            {selectedAction?.name}
          </span>
          {<FaChevronDown />}
        </button>
      </Menu.Button>
      <div className="chart-token-menu">
        <Menu.Items as="div" className="menu-items chart-token-menu-items">
          {whitelistedActions.map((option, index) => (
            <Menu.Item key={index}>
              <div
                className="menu-item"
                onClick={() => (onSelectAction ? onSelectAction(option) : null)}
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
