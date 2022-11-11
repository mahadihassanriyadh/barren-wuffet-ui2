import { t } from "@lingui/macro";
import { BigNumber } from "ethers";
import React from "react";
import { PRICE_DECIMALS } from "../../config/tokens";
import { Input } from "../Form/Input";

export function TrailingStopOptions(props: {
  triggerPrice: BigNumber | undefined;
  trailingPercent: number | undefined;
  setTriggerPrice: (val: BigNumber) => void;
  setTrailingPercent: (val: number) => void;
}) {
  const { triggerPrice, setTriggerPrice, trailingPercent, setTrailingPercent } =
    props;
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="bignumber"
        decimals={PRICE_DECIMALS}
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
