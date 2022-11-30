import { ethers } from "ethers";

export const USD_DECIMALS = 2;
export const PCT_DECIMALS = 2;

export function numberWithCommas(x: string | number | undefined) {
  if (!x) {
    return "...";
  }
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export const limitDecimals = (
  amount: string,
  maxDecimals: number | undefined
) => {
  let amountStr = amount.toString();
  if (maxDecimals === undefined) {
    return amountStr;
  }
  if (maxDecimals === 0) {
    return amountStr.split(".")[0];
  }
  const dotIndex = amountStr.indexOf(".");
  if (dotIndex !== -1) {
    let decimals = amountStr.length - dotIndex - 1;
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(
        0,
        amountStr.length - (decimals - maxDecimals)
      );
    }
  }
  return amountStr;
};

export const padDecimals = (amount: string, minDecimals: number) => {
  let amountStr = amount.toString();
  const dotIndex = amountStr.indexOf(".");
  if (dotIndex !== -1) {
    const decimals = amountStr.length - dotIndex - 1;
    if (decimals < minDecimals) {
      amountStr = amountStr.padEnd(
        amountStr.length + (minDecimals - decimals),
        "0"
      );
    }
  } else {
    amountStr = amountStr + ".0000";
  }
  return amountStr;
};

export const formatAmount = (
  amount: ethers.BigNumberish | undefined,
  amtDecimals: number, // e.g. amtDecimals = 2 means "3" is sent as 300
  displayDecimals: number | undefined,
  useCommas: boolean,
  defaultValue = "..."
) => {
  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue;
  }
  if (displayDecimals === undefined) {
    displayDecimals = 4;
  }
  let amountStr = ethers.utils.formatUnits(amount, amtDecimals);
  amountStr = limitDecimals(amountStr, displayDecimals);
  if (displayDecimals !== 0) {
    amountStr = padDecimals(amountStr, displayDecimals);
  }
  if (useCommas) {
    return numberWithCommas(amountStr);
  }
  return amountStr;
};

// % must be sent as decimals = PCT_DECIMALS
export const formatPCT = (
  amount: ethers.BigNumberish | undefined,
  displayDecimals = 2
) => {
  return formatAmount(amount, PCT_DECIMALS, displayDecimals, true);
};

// USD must be sent as decimals = USD_DECIMALS
export const formatUSD = (
  amount: ethers.BigNumberish | undefined,
  displayDecimals = 2
) => {
  return formatAmount(amount, USD_DECIMALS, displayDecimals, true);
};

export const formatDate = (dt: Date) =>
  dt?.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
