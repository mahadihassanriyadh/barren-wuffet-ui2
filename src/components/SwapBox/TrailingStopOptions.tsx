import { t } from "@lingui/macro";
import React from "react";
import { Input } from "../Form/Input";

export function TrailingStopOptions(props: {
  triggerPrice: number | undefined;
  trailingPercent: number | undefined;
  setTriggerPrice: (val: number) => void;
  setTrailingPercent: (val: number) => void;
}) {
  const { triggerPrice, setTriggerPrice, trailingPercent, setTrailingPercent } =
    props;
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Trigger Price`}
        id="triggerPrice"
        value={triggerPrice}
        placeholder={t`Trigger Price`}
        onChange={(value) => setTriggerPrice(value)}
        required
      />
      <div>
        <Input
          type="number"
          name={t`Trailing Percent`}
          id="trailingPercent"
          value={trailingPercent || 0}
          placeholder={t`Trailing Percent`}
          onChange={(value) => setTrailingPercent(value)}
          required
        />
        <span>%</span>
      </div>
    </div>
  );
}
