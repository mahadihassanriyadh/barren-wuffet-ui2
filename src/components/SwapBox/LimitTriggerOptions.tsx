import { t } from "@lingui/macro";
import { BigNumber } from "ethers";
import React from "react";
import { PRICE_DECIMALS } from "../../config/tokens";
import { Input } from "../Form/Input";

export function LimitTriggerOptions(props: {
  triggerPrice: BigNumber | undefined;
  setTriggerPrice: (val: BigNumber) => void;
}) {
  const { triggerPrice, setTriggerPrice } = props;
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
    </div>
  );
}
