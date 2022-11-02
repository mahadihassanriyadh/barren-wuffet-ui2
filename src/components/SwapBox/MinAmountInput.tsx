import { t } from "@lingui/macro";
import React from "react";
import { Token } from "../../config/tokens";
import { Input } from "../Form/Input";

export function MinAmountInput(props: {
  token?: Token;
  amount?: number;
  price?: number;
  tokenOutPriceUSD?: number;
  isEnabled: boolean;
  onChange: (val: number) => void;
}) {
  const { token, amount, tokenOutPriceUSD, isEnabled, onChange } = props;
  return (
    <div className="mt-4 space-y-3">
      <Input
        type="number"
        name={t`Min. ${token?.name} Amount`}
        id="amountReceived"
        value={amount}
        placeholder={t`Min. Amount to receive`}
        onChange={(value) => onChange(value)}
        required
        disabled={!isEnabled}
      />
      <span>$ {(tokenOutPriceUSD || 0) * (amount || 0)}</span>
    </div>
  );
}
