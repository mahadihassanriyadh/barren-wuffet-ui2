import React from "react";

import { Trans, t } from "@lingui/macro";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  Row,
  ColumnDef,
} from "@tanstack/react-table";

import { formatAmount, USD_DECIMALS } from "../../data/formatting";
import Table from "../Table/Table";
import useSWR from "swr";
import { Pool } from "../../api/models";
import { api } from "../../config/env";

const columnHelper = createColumnHelper<Pool>();

const columns: ColumnDef<Pool, any>[] = [
  columnHelper.accessor((row) => row.indexToken.symbol, {
    header: t`Pool`,
  }),
  columnHelper.accessor("vAPY", {
    header: t`Base vAPY`,
  }),
  columnHelper.accessor("tAPY", {
    header: t`Rewards tAPY`,
  }),
  columnHelper.accessor("volume", {
    header: t`Volume`,
  }),
  columnHelper.accessor("tvl", {
    header: t`TVL`,
    cell: (info) => formatAmount(info.getValue(), USD_DECIMALS, 2, true, "0.0"),
  }),
  {
    id: "close",
    header: t`X`,
    cell: ({ row }: { row: Row<Pool> }) => (
      <button onClick={() => closePool(row.getValue("pool"))} disabled={false}>
        <Trans>Close</Trans>
      </button>
    ),
  },
];

const closePool = (pool: Pool) => {};

export default function PoolsList() {
  const { data, error } = useSWR("/api/user/123", api.getPools);

  const table = useReactTable<Pool>({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <Table table={table} error={error} />
    </div>
  );
}
