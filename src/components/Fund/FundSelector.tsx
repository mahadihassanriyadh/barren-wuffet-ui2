import { Fund, FundDetails } from "../../api/models";
import Selector from "../Form/Selector";

const FundSelector = (props: {
  funds: Fund[];
  selected?: FundDetails;
  setSelected: any;
}) => {
  const { funds, selected, setSelected } = props;

  return (
    <div className="text-xl">
      <Selector
        items={funds.map((info: any) => ({ ...info, icon: info?.logo }))}
        selectedItem={{ ...selected, icon: selected?.logo }}
        setSelectedItem={setSelected}
      />
    </div>
  );
};

export default FundSelector;
