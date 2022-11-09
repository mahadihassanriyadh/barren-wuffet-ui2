import { t } from "@lingui/macro";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import React from "react";
import { Token } from "../../config/tokens";
import { Input } from "../Form/Input";

export function MinAmountInput(props: {
  token?: Token;
  amount?: BigNumber;
  price?: number;
  tokenOutPriceUSD?: number;
  isEnabled: boolean;
  onChange: (val: BigNumber) => void;
}) {
  const { token, amount, tokenOutPriceUSD, isEnabled, onChange } = props;
  return (
    <div className="mt-4 space-y-3">
      {token && (
        <>
          <Input
            type="bignumber"
            decimals={token.decimals}
            name={t`Min. ${token?.name} Amount`}
            id="amountReceived"
            value={amount}
            placeholder={t`Min. Amount to receive`}
            onChange={(value) => onChange(value)}
            required
            disabled={!isEnabled}
          />
          {tokenOutPriceUSD && amount && (
            <span>
              $ {formatUnits(amount.mul(tokenOutPriceUSD), token.decimals)}
            </span>
          )}
        </>
      )}
    </div>
  );
}
