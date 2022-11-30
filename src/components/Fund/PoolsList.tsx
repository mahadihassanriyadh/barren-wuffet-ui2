import React from "react";

import { Trans, t } from "@lingui/macro";

import { createColumnHelper, Row, ColumnDef } from "@tanstack/react-table";

import { formatAmount } from "../../data/formatting";
import Table from "../Table/Table";
import { useQuery } from "@tanstack/react-query";
import { Pool } from "../../api/models";
import { api } from "../../config/env";
import Checkbox from "../Form/Checkbox";

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
    cell: (info) => formatAmount(info.getValue(), 2, true, "0.0"),
  }),
];

export default function SelectPoolsList(props: {
  selectedPool?: Pool;
  setSelectedPool: (pool?: Pool) => void;
}) {
  const { selectedPool, setSelectedPool } = props;
  const { data, error } = useQuery<Pool[] | undefined, string>(
    ["pools"],
    api.getPools.bind(api)
  );

  const selectAction = columnHelper.display({
    id: "select",
    header: t`Select`,
    cell: ({ row }: { row: Row<Pool> }) => {
      const isSelected = row.original.id === selectedPool?.id;

      return (
        <Checkbox
          isChecked={isSelected}
          setIsChecked={() => {
            isSelected
              ? setSelectedPool(undefined)
              : setSelectedPool(row.original);
          }}
          label={""}
        />
      );
    },
  });

  return (
    <div className="p-2">
      <Table data={data} columns={columns.concat(selectAction)} error={error} />
    </div>
  );
}
