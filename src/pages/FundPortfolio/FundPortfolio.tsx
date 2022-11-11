import { t, Trans } from "@lingui/macro";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FundDetails } from "../../api/models";
import Button from "../../components/Button/Button";
import AssetBox from "../../components/Fund/AssetBox";
import { Address, ETH_ADDRESS } from "../../config/tokens";
import walletImg from "../../img/icons/walletIcon.svg";
import { useFund } from "../FundManage/FundManage";

export default function FundPortfolio(props: any) {
  const fund: FundDetails = useFund();
  const {
    assetBalances,
    protocolBalances,
    unredeemedBalances,
    wallet,
    id: fundId,
  } = fund || {};

  useEffect(() => {
    document.title = "Barren Wuffet | Fund Portfolio";
  }, []);

  return (
    <>
      {fundId && (
        <div className="container mx-auto">
          <div className="mx-5 mb-10 rounded-xl px-8 py-12 bg-gray-dark">
            <div className="grid grid-cols-3 gap-16">
              {assetBalances?.map((asset: any) => (
                <AssetBox
                  fundId={fundId}
                  asset={asset}
                  key={asset.name}
                ></AssetBox>
              ))}
              {protocolBalances?.map((asset: any) => (
                <AssetBox
                  fundId={fundId}
                  asset={asset}
                  key={asset.name}
                ></AssetBox>
              ))}
            </div>
            <div className="border-t border-gray-700 gap-16 mt-12 pt-12">
              <div>
                <strong>
                  <Trans>Unredeemed Balances</Trans>
                </strong>
              </div>
              <div className="grid grid-cols-3 py-5">
                {unredeemedBalances?.map((asset: any) => (
                  <AssetBox
                    fundId={fundId}
                    asset={asset}
                    key={asset.name}
                  ></AssetBox>
                ))}
              </div>
              <Button label={t`Redeem All`} />
            </div>
            <div className="border-t border-gray-700 gap-16 mt-12 pt-12">
              <strong>
                <Trans>Wallet</Trans>
              </strong>
              <div className="grid grid-cols-3 py-5">
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
        </div>
      )}
    </>
  );
}
