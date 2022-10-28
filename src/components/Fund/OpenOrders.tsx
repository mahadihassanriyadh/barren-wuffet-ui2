import React, { FunctionComponent, useEffect } from "react";
import { t, Trans } from "@lingui/macro";
import Button from "../Button/Button";
import { formatAmount, formatDate, USD_DECIMALS } from "../../data/formatting";
import {
  createColumnHelper,
  ColumnDef,
  Row,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import Table from "../Table/Table";
import { Order, TwapOrder } from "../../api/models";
import useSWR from "swr";
import { api } from "../../config/env";
import Tabs from "../Tabs/Tabs";

//formatAmount(a, USD_DECIMALS, 2, true, "0.0");
// we arent using Big Number yet. so just return the number.
// Need to org. all of this to use Big Number.
const f$ = (a: number) => a;

const columnHelper = createColumnHelper<Order>();

const commonColumns: ColumnDef<Order, any>[] = [
  columnHelper.accessor("platform", {
    header: t`Platform`,
  }),
  columnHelper.accessor("position", {
    header: t`Position`,
  }),
  columnHelper.accessor("trigger_type", {
    header: t`Trigger Type`,
  }),
  columnHelper.accessor("collateral", {
    header: t`Collateral`,
    cell: (info) => f$(info.getValue()),
  }),
  columnHelper.accessor("limit_price", {
    header: t`Limit Price`,
    cell: (info) => f$(info.getValue()),
  }),
  columnHelper.accessor("creation_timestamp", {
    header: t`Date Created`,
    cell: (info) => formatDate(info.getValue()),
  }),
  columnHelper.accessor("expiry_timestamp", {
    header: t`Expiry Date`,
    cell: (info) => formatDate(info.getValue()),
  }),
];

const twapColumns: ColumnDef<Order, any>[] = [
  columnHelper.accessor("twap_orders", {
    header: t`Filled/ Order Size`,
    cell: (info) => {
      const twap_orders: TwapOrder[] = info.getValue();
      const total = twap_orders.reduce((acc, o) => acc + o.collateral, 0);
      const filled = twap_orders
        .filter((o) => o.is_executed)
        .reduce((acc, o) => acc + o.collateral, 0);
      return `${f$(filled)} / ${f$(total)}`;
    },
  }),
  columnHelper.accessor("twap_orders", {
    header: t`Batch Size`,
    cell: (info) => {
      const twap_orders: TwapOrder[] = info.getValue();
      const total = twap_orders.reduce((acc, o) => acc + o.collateral, 0);
      return Math.round((twap_orders[0].collateral * 100) / total) + "%";
    },
  }),
  columnHelper.accessor("twap_orders", {
    header: t`Avg Fill Price`,
    cell: (info) => {
      const twap_orders: TwapOrder[] = info.getValue();
      const avgPrice =
        twap_orders
          .filter((o) => o.is_executed)
          .reduce((acc, o) => acc + (o.fill_price || 0), 0) /
        twap_orders.length;
      return f$(avgPrice);
    },
  }),
];

const actionColumns: ColumnDef<Order, any>[] = [
  {
    id: "action",
    header: t`Action`,
    cell: ({ row }: { row: Row<Order> }) => {
      return (
        <button onClick={() => {}} disabled={false}>
          <Trans>Cancel</Trans>
        </button>
      );
    },
  },
];

const CancelOrderButton: FunctionComponent<{
  cancelOrderIdList: string[];
}> = (props) => {
  const { cancelOrderIdList } = props;
  const orderText = cancelOrderIdList.length > 1 ? t`orders` : t`order`;
  if (cancelOrderIdList.length === 0) return <div></div>;
  return (
    <Button
      className="muted font-base cancel-order-btn"
      disabled={false}
      type="button"
      label={t`Cancel ${cancelOrderIdList.length} ${orderText}`}
    ></Button>
  );
};

const OpenOrders = (props: {}) => {
  const { data, error } = useSWR(
    "/api/orders/open",
    api.getOpenOrders.bind(api)
  );

  const singleOrders = (data || []).filter((o) => !o.twap_orders?.length);
  const twapOrders = (data || []).filter((o) => o.twap_orders?.length);

  const singleOrdersTable = useReactTable<Order>({
    data: singleOrders,
    columns: commonColumns.concat(actionColumns),
    getCoreRowModel: getCoreRowModel(),
  });

  const twapOrdersTable = useReactTable<Order>({
    data: twapOrders,
    columns: commonColumns.concat(twapColumns).concat(actionColumns),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <CancelOrderButton cancelOrderIdList={[]} />
      <Tabs
        options={[
          {
            label: t`Trigger Orders`,
            content: <Table table={singleOrdersTable} error={error} />,
          },
          {
            label: t`Twap Orders`,
            content: <Table table={twapOrdersTable} error={error} />,
          },
        ]}
      />
    </div>
  );
};

export default OpenOrders;
