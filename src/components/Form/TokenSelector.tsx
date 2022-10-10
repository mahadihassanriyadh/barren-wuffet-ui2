import React from "react";
import { Listbox } from "@headlessui/react";
import { Token } from "../../config/tokens";

export default function TokenSelector(props: {
  tokens: Token[];
  selectedToken: string;
  setSelectedToken: (value: string) => void;
}) {
  const { tokens, selectedToken, setSelectedToken } = props;

  return (
    <Listbox value={selectedToken} onChange={setSelectedToken}>
      <Listbox.Button>{selectedToken}</Listbox.Button>
      <Listbox.Options>
        {tokens.map((token) => (
          <Listbox.Option key={token.address} value={token.name}>
            {token.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
