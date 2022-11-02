import { t } from "@lingui/macro";
import React from "react";
import { Input } from "../Form/Input";

export function LimitTriggerOptions(props: {
  triggerPrice: number | undefined;
  setTriggerPrice: (val: number) => void;
}) {
  const { triggerPrice, setTriggerPrice } = props;
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
    </div>
  );
}
