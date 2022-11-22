import { t, Trans } from "@lingui/macro";
import React, { useState } from "react";
import { Input } from "../Form/Input";
import Selector from "../Form/Selector";

enum TwapIntervals {
  MIN = "Min",
  HOUR = "Hour",
  DAY = "Day",
}

const intervalToSeconds = {
  [TwapIntervals.MIN]: 60,
  [TwapIntervals.HOUR]: 60 * 60,
  [TwapIntervals.DAY]: 60 * 60 * 24,
};
function calculateIntervalSeconds(interval: TwapIntervals, value: number) {
  return value * intervalToSeconds[interval];
}

function calculateIntervalValue(
  interval: TwapIntervals,
  intervalSeconds: number
) {
  return intervalSeconds / intervalToSeconds[interval];
}

export function TwapOptions(props: {
  numIntervals: number;
  intervalSeconds: number;
  setNumIntervals: (val: number) => void;
  setIntervalSeconds: (val: number) => void;
}) {
  const { numIntervals, intervalSeconds, setNumIntervals, setIntervalSeconds } =
    props;
  const [interval, setInterval] = useState(TwapIntervals.DAY);
  const batchSize = 100 / numIntervals;

  const intervalValue = calculateIntervalValue(interval, intervalSeconds);
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Batch Size`}
        id="batchSize"
        value={batchSize * 100}
        placeholder={t`Batch Size`}
        onChange={(batchSize) => setNumIntervals(100 / batchSize)}
        required
      />
      %
      <Selector
        items={Object.values(TwapIntervals).map((i) => ({ name: i }))}
        selectedItem={{ name: interval }}
        setSelectedItem={(item) => setInterval(item.name)}
      />
      <Input
        type="number"
        name={t`Interval`}
        id="intervalValue"
        value={intervalValue}
        placeholder={t`Interval`}
        onChange={(value) =>
          setIntervalSeconds(calculateIntervalSeconds(interval, value))
        }
        required
      />
      <Trans>
        Estimated Completion: {intervalValue / batchSize} {interval}
      </Trans>
    </div>
  );
}
