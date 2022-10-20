import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
import Button from "../Form/Button";
import { Input } from "../Form/Input";
import TokenSelector from "../Form/TokenSelector";

export default function SwapBox(props: { tokens: Token[] }) {
  const { tokens } = props;
  const [fromToken, setFromToken] = useState(tokens[0]?.address);
  const [toToken, setToToken] = useState(tokens[0]?.address);
  const [amountToSwap, setAmountRaised] = useState(10);

  return (
    <div>
      <div className="mt-4 space-y-3">
        <Trans>Token In:</Trans>
        <TokenSelector
          tokens={tokens}
          selectedToken={fromToken}
          setSelectedToken={setFromToken}
        />
      </div>
      <div className="mt-4 space-y-3">
        <Trans>Token Out:</Trans>
        <TokenSelector
          tokens={tokens}
          selectedToken={toToken}
          setSelectedToken={setToToken}
        />
      </div>
      <div className="mt-4 space-y-3">
        <Input
          type="number"
          name={t`Amount`}
          id="amountRaised"
          value={amountToSwap}
          placeholder={t`Amounts being raised $`}
          onChange={(e) => setAmountRaised(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
}
