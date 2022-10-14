import React from "react";
import { useOutletContext } from "react-router-dom";
import AssetBox from "../../components/Fund/AssetBox";
import walletImg from "../../img/icons/walletIcon.svg"

export default function FundPortfolio(props: any) {
  const [selected]: any = useOutletContext();
  const { assetBalances, protocolBalances, wallet } = selected || {};
  console.log(assetBalances)
  return (
    <div className="container mx-auto">
      <div className="mx-5 mb-10 rounded-xl px-8 py-12 bg-[#1c1b25]">
        <div className="grid grid-cols-3 gap-16">
          {
            assetBalances?.map((asset: any) => (
              <AssetBox
                asset={asset}
              ></AssetBox>
            ))
          }
          {
            protocolBalances?.map((asset: any) => (
              <AssetBox
                asset={asset}
              ></AssetBox>
            ))
          }
        </div>
        {/* <hr className="" /> */}
        <div className="grid grid-cols-3 gap-16 mt-12 pt-12 border-t border-gray-700">
          <AssetBox
            asset={{name: 'Wallet', dollarValue: wallet, img: walletImg}}
          ></AssetBox>
        </div>
      </div>
    </div>
  );
}
