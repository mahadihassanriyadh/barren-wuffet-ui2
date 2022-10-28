import React from "react";
import { numberWithCommas } from "../../data/formatting";
import upIcon from "../../img/icons/upIcon.svg";
import downIcon from "../../img/icons/downIcon.svg";

export const GenericColumn = (props: {
  type?: string;
  status?: string;
  label?: string;
  amount?: number;
  changedPercent?: number;
  logo?: string;
  name?: string;
  text?: string;
}) => {
  const isProfitable = (props.changedPercent || 0) >= 0;

  switch (props.type) {
    case "status":
      return (
        <>
          <p className="text-xs font-medium bg-[#1d1d21] text-center py-1.5 px-3 rounded-2xl">
            {props.status}
          </p>
        </>
      );
    case "changePercent":
      return (
        <>
          <div className="flex items-center justify-between space-x-4">
            <p className="font-bold">{Math.abs(props.changedPercent || 0)}</p>
            <img
              className={`${
                isProfitable ? "bg-[#072213]" : "bg-[#301616]"
              } p-1.5 rounded-full`}
              src={isProfitable ? upIcon : downIcon}
              alt=""
            />
          </div>
        </>
      );
    case "name":
      return (
        <>
          <div className="flex items-center space-x-4">
            <img src={props.logo} alt="" />
            <h4 className="font-bold">{props.name}</h4>
          </div>
        </>
      );
    case "amount":
      return (
        <>
          <div className="flex items-center justify-between space-x-4">
            <p
              className={`text-sm ${
                isProfitable ? "text-green-400" : "text-red-400"
              }`}
            >
              {numberWithCommas(props.amount)}
            </p>
          </div>
        </>
      );
    default:
      return (
        <>
          <p className="text-sm text-gray-300">{props.text}</p>
        </>
      );
  }
};
