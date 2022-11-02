import { t } from "@lingui/macro";
import React from "react";
import { Input } from "../Form/Input";

export function LimitPriceInput(props: {
  price?: number;
  setPrice: (val: number) => void;
}) {
  const { price, setPrice } = props;
  return (
    <div className="mt-4 space-y-3">
      {
        <Input
          type="number"
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
