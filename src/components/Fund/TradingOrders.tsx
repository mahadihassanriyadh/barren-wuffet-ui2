import React, { FunctionComponent, useEffect } from "react";
import { t } from "@lingui/macro";
import Button from "../Form/Button";
import { formatAmount, USD_DECIMALS } from "../../data/formatting";

const CancelOrderButton: FunctionComponent<{
  cancelOrderIdList: string[];
  onMultipleCancelClick: Function;
}> = (props) => {
  const { cancelOrderIdList, onMultipleCancelClick } = props;
  const orderText = cancelOrderIdList.length > 1 ? t`orders` : t`order`;
  if (cancelOrderIdList.length === 0) return <div></div>;
  return (
    <Button
      className="muted font-base cancel-order-btn"
      disabled={false}
      type="button"
      label={t`Cancel ${cancelOrderIdList.length} ${orderText}`}
      // onClick={onMultipleCancelClick}
    ></Button>
  );
};

const TradingOrders = (props: {}) => {
  // const onMultipleCancelClick = useCallback(
  //   async function () {
  //     setIsCancelMultipleOrderProcessing(true);
  //     try {
  //       // TODO actually cancel the orders
  //       const receipt = { status: 1 };
  //       if (receipt.status === 1) {
  //         setCancelOrderIdList([]);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsCancelMultipleOrderProcessing(false);
  //     }
  //   },
  //   [
  //     chainId,
  //     library,
  //     pendingTxns,
  //     setPendingTxns,
  //     setCancelOrderIdList,
  //     cancelOrderIdList,
  //     setIsCancelMultipleOrderProcessing,
  //   ]
  // );

  return (
    <div>
      <CancelOrderButton
        cancelOrderIdList={[]}
        onMultipleCancelClick={() => {}}
      />
      <table>Trading Orders</table>
    </div>
  );
};

export default TradingOrders;
