import { t, Trans } from "@lingui/macro";
import React from "react";
import { useState } from "react";
import { Token } from "../../config/tokens";
import Button from "../Form/Button";
import Checkbox from "../Form/Checkbox";
import { Input } from "../Form/Input";
import Selector from "../Form/Selector";
import Slider from "../Form/Slider";
import TokenSelector from "../Form/TokenSelector";

const twapIntervals = ["Min", "Hour", "Day"];

function TwapOptions() {
  const [batchSize, setBatchSize] = useState(0.25);
  const [interval, setInterval] = useState(60 * 60); // 1 hour

  return (
    <div>
      <div className="mt-4 space-y-3">
        <Input
          type="number"
          name={t`Batch Size`}
          id="batchSize"
          value={batchSize * 100}
          placeholder={t`Batch Size`}
          onChange={(e) => setBatchSize(parseFloat(e.target.value) / 100)}
          required
        />
        %
        <Selector
          items={twapIntervals.map((i) => ({ name: i }))}
          selectedItem={{ name: twapIntervals[0] }}
          setSelectedItem={(item) => console.log(item)}
        />
        <Input
          type="number"
          name={t`Interval`}
          id="interval"
          value={interval / 60}
          placeholder={t`Interval`}
          onChange={(e) => setInterval(parseFloat(e.target.value) * 60)} // need to adjust based on selector
          required
        />
        <Trans>Estimated Completion: {interval / batchSize / 60} minutes</Trans>
      </div>
    </div>
  );
}
export default function SwapBox(props: {
  tokens: Token[];
  amountAvailable: number;
}) {
  const { tokens } = props;
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[0]);
  const [amountToSwap, setAmountToSwap] = useState(10);
  const [useTwap, setUseTwap] = useState(false);

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
      <Checkbox
        isChecked={useTwap}
        label={"Enable TWAP"}
        setIsChecked={setUseTwap}
      />
      {useTwap && <TwapOptions />}
      <div className="flex justify-center mt-10">
        <Button type="submit" label={t`Confirm`} />
      </div>
    </div>
  );
}
