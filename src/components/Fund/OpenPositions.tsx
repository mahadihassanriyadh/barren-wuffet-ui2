import React from "react";
import { t } from "@lingui/macro";
import Button from "../Button/Button";
import { formatDate } from "../../data/formatting";
import {
  createColumnHelper,
  ColumnDef,
  Row,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import Table from "../Table/Table";
import { Position, PositionType } from "../../api/models";
import useSWR from "swr";
import { api } from "../../config/env";
import Tabs from "../Tabs/Tabs";

//formatAmount(a, USD_DECIMALS, 2, true, "0.0");
// we arent using Big Number yet. so just return the number.
// Need to org. all of this to use Big Number.
const f$ = (a: number) => a;

const columnHelper = createColumnHelper<Position>();

const commonColumns: ColumnDef<Position, any>[] = [
  columnHelper.accessor("platform", {
    header: t`Platform`,
  }),
  columnHelper.accessor("asset", {
    header: t`Asset`,
  }),
  columnHelper.accessor("collateral", {
    header: t`Collateral`,
    cell: (info) => f$(info.getValue()),
  }),
  columnHelper.accessor("value", {
    header: t`Value`,
    cell: (info) => f$(info.getValue()),
  }),
  columnHelper.accessor("size", {
    header: t`Size`,
  }),
  columnHelper.accessor("asset_prices", {
    header: t`Asset Prices`,
    cell: (info) => {
      const assetPrices: { asset: string; price: number }[] = info.getValue();
      return assetPrices.map((a) => (
        <div>
          {a.asset}: ${a.price}
        </div>
      ));
    },
  }),
  columnHelper.accessor("creation_timestamp", {
    header: t`Date Created`,
    cell: (info) => formatDate(info.getValue()),
  }),
];

const lpColumns: ColumnDef<Position, any>[] = [
  columnHelper.accessor("yield", {
    header: t`Yield`,
  }),
];

const spotActionColumns: ColumnDef<Position, any>[] = [
  {
    id: "action",
    header: t`Action`,
    cell: ({ row }: { row: Row<Position> }) => {
      return (
        <div>
          <Button label={t`Close`} onClick={() => {}} disabled={false} />
          <Button label={t`Add Collateral`} onClick={() => {}} />
        </div>
      );
    },
  },
];

const lpActionColumns: ColumnDef<Position, any>[] = [
  {
    id: "action",
    header: t`Action`,
    cell: ({ row }: { row: Row<Position> }) => {
      return <Button label={t`Unstake`} onClick={() => {}} disabled={false} />;
    },
  },
];

const OpenPositions = (props: {}) => {
  const { data, error } = useSWR(
    "/api/orders/open",
    api.getPositions.bind(api)
  );

  const spotPositions = (data || []).filter(
    (p) => p.position_type === PositionType.SPOT
  );

  const lpPositions = (data || []).filter(
    (p) => p.position_type === PositionType.LP
  );

  const spotPositionsTable = useReactTable<Position>({
    data: spotPositions,
    columns: commonColumns.concat(spotActionColumns),
    getCoreRowModel: getCoreRowModel(),
  });

  const lpPositionsTable = useReactTable<Position>({
    data: lpPositions,
    columns: commonColumns.concat(lpColumns).concat(lpActionColumns),
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("hey");

  return (
    <div>
      <Tabs
        options={[
          {
            label: t`Perps/Swaps`,
            content: <Table table={spotPositionsTable} error={error} />,
          },
          {
            label: t`LP`,
            content: <Table table={lpPositionsTable} error={error} />,
          },
        ]}
      />
    </div>
  );
};

export default OpenPositions;
