import React from "react";
import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import "../Exchange/ChartTokenSelector.css";

export enum TradeOptions {
  SPOT,
  OCO,
  TRAILING_STOP,
  MARKET_TRIGGER,
}
export default function TradeOptionSelector(props: {
  selectedTradeOption: { key: TradeOptions; name: string };
  onSelectTradeOption: (tradeOption: TradeOptions) => void;
}) {
  const { selectedTradeOption, onSelectTradeOption } = props;
  const tradeOptions = [
    { key: TradeOptions.SPOT, name: "Spot" },
    { key: TradeOptions.OCO, name: "OCO" },
    { key: TradeOptions.TRAILING_STOP, name: "Trailing Stop" },
    { key: TradeOptions.MARKET_TRIGGER, name: "Trigger (Market)" },
  ];

  const onSelect = async (action: any) => {
    onSelectTradeOption(action);
  };

  var value = selectedTradeOption || tradeOptions[0];

  return (
    <Menu>
      <Menu.Button as="div">
        <button className={`App-cta small transparent chart-token-selector`}>
          <span className="chart-token-selector--current">{value.name}</span>
          {<FaChevronDown />}
        </button>
      </Menu.Button>
      <div className="chart-token-menu">
        <Menu.Items as="div" className="menu-items chart-token-menu-items">
          {tradeOptions.map((option, index) => (
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
