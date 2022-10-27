import { TradeOptions } from "../../api/models";
import Selector from "../Form/Selector";

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
