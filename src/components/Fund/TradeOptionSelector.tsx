import Selector from "../Form/Selector";

export enum TradeOptions {
  SPOT = "spot",
  OCO = "oco",
  TRAILING_STOP = "trailing_stop",
  MARKET_TRIGGER = "market_trigger",
}

const tradeOptions = [
  { id: TradeOptions.SPOT, name: "Spot" },
  { id: TradeOptions.OCO, name: "OCO" },
  { id: TradeOptions.TRAILING_STOP, name: "Trailing Stop" },
  { id: TradeOptions.MARKET_TRIGGER, name: "Trigger (Market)" },
];

const TradeOptionSelector = (props: {
  selected: TradeOptions;
  setSelected: (topt: TradeOptions) => void;
}) => {
  const { selected, setSelected } = props;

  return (
    <Selector
      items={tradeOptions}
      selectedItem={
        tradeOptions.find((t) => t.id === selected) || tradeOptions[0]
      }
      setSelectedItem={(to) => setSelected(to.id)}
    />
  );
};

export default TradeOptionSelector;
