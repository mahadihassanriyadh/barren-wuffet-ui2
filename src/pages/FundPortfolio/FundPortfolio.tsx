import { t } from "@lingui/macro";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AssetBox from "../../components/Fund/AssetBox";
import { ETH_ADDRESS } from "../../config/tokens";
import walletImg from "../../img/icons/walletIcon.svg";

export default function FundPortfolio(props: any) {
  const [selected]: any = useOutletContext();
  const {
    assetBalances,
    protocolBalances,
    wallet,
    id: fundId,
  } = selected || {};

  useEffect(() => {
    document.title = "Barren Wuffet | Fund Portfolio";
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mx-5 mb-10 rounded-xl px-8 py-12 bg-gray-dark">
        <div className="grid grid-cols-3 gap-16">
          {assetBalances?.map((asset: any) => (
            <AssetBox fundId={fundId} asset={asset} key={asset.name}></AssetBox>
          ))}
          {protocolBalances?.map((asset: any) => (
            <AssetBox fundId={fundId} asset={asset} key={asset.name}></AssetBox>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-16 mt-12 pt-12 border-t border-gray-700">
          {/* this is the base asset of the fund. Will changed to USDC */}
          <AssetBox
            fundId={fundId}
            asset={{
              address: ETH_ADDRESS,
              name: t`Wallet`,
              dollarValue: wallet,
              img: walletImg,
            }}
          ></AssetBox>
        </div>
      </div>
    </div>
  );
}
