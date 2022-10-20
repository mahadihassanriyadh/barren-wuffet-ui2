import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
import Button from "../Form/Button";
import { Input } from "../Form/Input";
import Slider from "../Form/Slider";
import TokenSelector from "../Form/TokenSelector";

export default function SwapBox(props: {
  tokens: Token[];
  amountAvailable: number;
}) {
  const { tokens } = props;
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[0]);
  const [amountToSwap, setAmountToSwap] = useState(10);

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
          onChange={(e) => setAmountToSwap(parseFloat(e.target.value))}
          required
        />
      </div>
      <Slider
        value={Math.round((amountToSwap * 100) / props.amountAvailable)}
        onChange={(val) =>
          setAmountToSwap(Math.round((val / 100) * props.amountAvailable))
        }
      />
      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
}
