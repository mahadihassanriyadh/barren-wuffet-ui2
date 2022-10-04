import React from "react";
import { Listbox } from "@headlessui/react";

export default function TokenSelector(props: {
  tokens: string[];
  selectedToken: string;
  setSelectedToken: (value: string) => void;
}) {
  const { tokens, selectedToken, setSelectedToken } = props;

  return (
    <Listbox value={selectedToken} onChange={setSelectedToken}>
      <Listbox.Button>{selectedToken}</Listbox.Button>
      <Listbox.Options>
        {tokens.map((token) => (
          <Listbox.Option key={token} value={token}>
            {token}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
