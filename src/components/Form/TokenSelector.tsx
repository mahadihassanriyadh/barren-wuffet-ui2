import { Token } from "../../config/tokens";
import Selector from "./Selector";

export default function TokenSelector(props: {
  tokens: Token[];
  selectedToken: Token;
  setSelectedToken: (value: Token) => void;
}) {
  const { tokens, selectedToken, setSelectedToken } = props;

  return (
    <Selector
      items={tokens}
      selectedItem={selectedToken}
      setSelectedItem={setSelectedToken}
    />
  );
}
