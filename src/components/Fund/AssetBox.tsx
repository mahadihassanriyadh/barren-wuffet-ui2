import React from "react";
import { useFundBalance } from "../../api/rpc";
import { Address } from "../../config/tokens";
import { numberWithCommas, padDecimals } from "../../data/formatting";

const AssetBox = (props: {
  asset: {
    img?: any;
    name: any;
    dollarValue?: any;
    down?: any;
    percentage?: any;
    address: Address;
  };
  fundId: Address;
}) => {
  const { img, name, dollarValue, down, percentage, address } = props.asset;
  const fundId = props.fundId;

  const { data: tokenData } = useFundBalance(fundId, address);

  return (
    <>
      {tokenData && (
        <div className="flex space-x-4 items-center bg-gray-medium text-white px-5 py-4 rounded-xl shadow-xl">
          <img src={img} alt="" />
          <div className="flex justify-between items-end w-full">
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-lg font-medium">
                $ {numberWithCommas(dollarValue)}
              </p>
            </div>
            <div>
              {
                <p className="text-end mb-1">
                  {tokenData?.formatted}{" "}
                  <span className="text-gray-500">{tokenData?.symbol}</span>
                </p>
              }
              <div className="flex items-center space-x-3">
                {down && <p className="text-red-400 text-xs">-${down}</p>}
                {percentage && (
                  <p className="text-xs bg-gray-light py-1 px-2 rounded-xl ml-2 text-gray-400">
                    {padDecimals(percentage, 0)} %
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssetBox;
