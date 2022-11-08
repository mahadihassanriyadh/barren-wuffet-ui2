import React, { useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import FundBanner from "../../components/Fund/FundBanner";
import { Fund, FundDetails } from "../../api/models";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/env";

const FundManage = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();

  const { data: funds, error: listError } = useQuery<
    Fund[] | undefined,
    string
  >(["funds"], api.getFunds.bind(api));

  const {
    data: fund,
    isError,
    dataUpdatedAt,
  } = useQuery<FundDetails | undefined, string>(["fundDetails", fundId], () => {
    return api.getFundDetails.bind(api)(fundId);
  });

  return (
    <div className="container mx-auto my-5">
      {!funds && <div>No funds available</div>}
      {!fundId && funds && <Navigate to={`/fund/${funds[0].id}/portfolio`} />}
      {funds && fundId && (
        <div>
          <FundBanner
            funds={funds} // stick to FundType till we sort out the types
            selectedFund={fund}
            setSelected={(newFund: FundDetails) =>
              navigate(`/fund/${newFund.id}/portfolio`)
            }
            dataUpdatedAt={dataUpdatedAt}
          ></FundBanner>
          <Outlet context={[fund]} />
        </div>
      )}
    </div>
  );
};

export default FundManage;
