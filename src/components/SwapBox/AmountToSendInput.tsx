import { t } from "@lingui/macro";
import React from "react";
import { Token } from "../../config/tokens";
import { Input } from "../Form/Input";
import Slider from "../Form/Slider";

export function AmountToSendInput(props: {
  fromToken?: Token;
  amountToSend?: number;
  setAmountToSend: (val: number) => void;
  amountFromAvailable?: number;
}) {
  const { fromToken, amountToSend, setAmountToSend, amountFromAvailable } =
    props;

  const sliderVal =
    (amountToSend &&
      amountFromAvailable &&
      Math.round((amountToSend * 100) / amountFromAvailable)) ||
    0;
  return (
    <div>
      <div className="mt-4 space-y-3">
        <Input
          type="number"
          name={t`${fromToken?.name} Amount`}
          id="amountToSend"
          value={amountToSend}
          placeholder={t`Amount to send`}
          onChange={(value) =>
            amountFromAvailable &&
            setAmountToSend(Math.min(amountFromAvailable, value))
          }
          required
        />
      </div>
      <Slider
        value={sliderVal}
        onChange={(val) =>
          amountFromAvailable &&
          setAmountToSend(Math.round((val / 100) * amountFromAvailable))
        }
      />
    </div>
  );
}
