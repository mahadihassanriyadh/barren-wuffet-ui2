import { t } from "@lingui/macro";
import { BigNumber } from "ethers";
import React from "react";
import { PRICE_DECIMALS } from "../../config/tokens";
import { Input } from "../Form/Input";

export function LimitPriceInput(props: {
  price?: BigNumber;
  setPrice: (val: BigNumber) => void;
}) {
  const { price, setPrice } = props;
  return (
    <div className="mt-4 space-y-3">
      {
        <Input
          type="bignumber"
          decimals={PRICE_DECIMALS}
          name={t`Limit Price`}
          id="limitPrice"
          value={price}
          placeholder={t`Limit Price`}
          onChange={(value) => setPrice(value)}
          required
        />
      }
    </div>
  );
}
