import { t } from "@lingui/macro";
import { BigNumber as BN } from "ethers";
import React from "react";
import { Token } from "../../config/tokens";
import { Input } from "../Form/Input";
import Slider from "../Form/Slider";

export function AmountToSendInput(props: {
  fromToken?: Token;
  amountToSend?: BN;
  setAmountToSend: (val: BN) => void;
  amountFromAvailable?: BN;
}) {
  const { fromToken, amountToSend, setAmountToSend, amountFromAvailable } =
    props;

  const sliderVal =
    (amountToSend &&
      amountFromAvailable &&
      !amountFromAvailable.isZero() &&
      Math.round(amountToSend.mul(100).div(amountFromAvailable).toNumber())) ||
    0;
  return (
    <>
      {fromToken && (
        <div>
          <div className="mt-4 space-y-3">
            <Input
              type="bignumber"
              name={t`${fromToken.name} Amount`}
              id="amountToSend"
              value={amountToSend}
              decimals={fromToken.decimals}
              placeholder={t`Amount to send`}
              onChange={(value) =>
                amountFromAvailable &&
                setAmountToSend(
                  amountFromAvailable.lte(value) ? amountFromAvailable : value
                )
              }
              required
            />
          </div>
          <Slider
            value={sliderVal}
            onChange={(val) =>
              amountFromAvailable &&
              setAmountToSend(amountFromAvailable.mul(val).div(100))
            }
          />
        </div>
      )}
    </>
  );
}
