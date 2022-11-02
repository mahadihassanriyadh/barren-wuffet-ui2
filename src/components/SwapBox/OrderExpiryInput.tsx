import { t } from "@lingui/macro";
import React from "react";
import { Input } from "../Form/Input";

export function OrderExpiryInput(props: {
  expiryDate: Date;
  setExpiryDate: (val: Date) => void;
}) {
  const { expiryDate, setExpiryDate } = props;
  return (
    <div className="mt-4 space-y-3">
      {
        <Input
          type="date"
          value={expiryDate}
          name={t`Order Expiry`}
          id="orderExpiry"
          placeholder={t`Order Expiry`}
          onChange={(newDate: Date) => {
            if (newDate.getTime() > new Date().getTime()) {
              setExpiryDate(newDate);
            }
          }}
          required
        />
      }
    </div>
  );
}
