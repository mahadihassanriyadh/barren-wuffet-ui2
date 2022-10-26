import Selector from "../Form/Selector";

export enum TradeOptions {
  LIMIT = "limit",
  OCO = "oco",
  TRAILING_STOP = "trailing_stop",
  LIMIT_TRIGGER = "limit_trigger",
}

const tradeOptions = [
  { id: TradeOptions.LIMIT, name: "Limit" },
  { id: TradeOptions.OCO, name: "OCO" },
  { id: TradeOptions.TRAILING_STOP, name: "Trailing Stop" },
  { id: TradeOptions.LIMIT_TRIGGER, name: "Trigger (Limit)" },
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
