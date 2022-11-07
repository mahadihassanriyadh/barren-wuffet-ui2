/* eslint-disable no-self-compare */
import React from "react";

import { t } from "@lingui/macro";

import {
  createColumnHelper,
  Row,
  ColumnDef,
  RowSelection,
} from "@tanstack/react-table";

import { formatDate } from "../../data/formatting";
import Table from "../Table/Table";
import { useQuery } from "@tanstack/react-query";
import { Fund, FundStatus } from "../../api/models";
import { api } from "../../config/env";
import Button from "../Button/Button";
import BorderlessButton from "../Button/BorderlessButton";
import { GenericColumn } from "../Table/GenericColumn";
import Checkbox from "../Form/Checkbox";

const columnHelper = createColumnHelper<Fund>();

const columns: ColumnDef<Fund, any>[] = [
  columnHelper.accessor("name", {
    header: t`Name`,
    cell: (info) => (
      <GenericColumn name={info.getValue()} logo="" type="name" />
    ),
  }),
  columnHelper.accessor("creation_timestamp", {
    header: t`Start Date`,
    cell: (info) => <GenericColumn text={formatDate(info.getValue())} />,
  }),
  columnHelper.accessor("close_timestamp", {
    header: t`Maturity Date`,
    cell: (info) => <GenericColumn text={formatDate(info.getValue())} />,
  }),
  columnHelper.accessor("change_percent", {
    header: t`Change %`,
    cell: (info) => (
      <GenericColumn
        changedPercent={
          info.getValue() ? Math.round(info.getValue() * 10000) / 100 : 0
        }
        type="changePercent"
      />
    ),
  }),
  columnHelper.accessor((row) => row, {
    header: t`Amount Raised`,
    cell: (info) => (
      <GenericColumn
        amount={info.getValue().amount_raised}
        changedPercent={info.getValue().change_percent}
        type="amount"
      />
    ),
  }),
  columnHelper.accessor("investor_count", {
    header: t`Investors`,
  }),
  columnHelper.accessor("deploy_timestamp", {
    header: t`Fund Raising End Date`,
    cell: (info) => <GenericColumn text={formatDate(info.getValue())} />,
  }),
  columnHelper.accessor("admin_fee", {
    header: t`Admin Fee`,
    cell: (info) => <GenericColumn amount={info.getValue()} type="percent" />,
  }),
  columnHelper.accessor("status", {
    header: t`Status`,
    cell: (info) => (
      <GenericColumn
        status={FundStatus[info.getValue()].toLowerCase()}
        type="status"
      />
    ),
  }),
  columnHelper.accessor("manager", {
    header: t`Manager`,
    cell: (info) => info.getValue(),
  }),
];

const linkAction = columnHelper.display({
  id: "action",
  header: t`Action`,
  cell: ({ row }: { row: Row<Fund> }) => {
    const status = row.original.status;
    if (status === FundStatus.RAISING) {
      return (
        <Button
          onClick={() => investInFund(row.original.id)}
          disabled={false}
          label={t`Invest`}
        />
      );
    } else if (status === FundStatus.CLOSED || status === FundStatus.CLOSABLE) {
      return <></>;
    } else if (status === FundStatus.DEPLOYED) {
      return <BorderlessButton label={t`See Investment`} />;
    }
  },
});

function investInFund(fundId: string): void {
  throw new Error("Function not implemented.");
}

export default function FundsList() {
  const { data, error } = useQuery<Fund[] | undefined, string>(
    ["funds"],
    api.getFunds.bind(api)
  );

  return (
    <div className="container mx-auto">
      <Table columns={columns.concat(linkAction)} data={data} error={error} />
    </div>
  );
}

export function SelectFundsList(props: {
  selectedFundId?: string;
  setSelectedFundId: (fundId?: string) => void;
}) {
  const { selectedFundId, setSelectedFundId } = props;
  const { data, error } = useQuery<Fund[] | undefined, string>(
    ["funds"],
    api.getFunds.bind(api)
  );

  const selectAction = columnHelper.display({
    id: "select",
    header: t`Select`,
    cell: ({ row }: { row: Row<Fund> }) => {
      const isSelected = row.original.id === selectedFundId;

      return (
        <Checkbox
          isChecked={isSelected}
          setIsChecked={() => {
            isSelected
              ? setSelectedFundId(undefined)
              : setSelectedFundId(row.original.id);
          }}
          label={""}
        />
      );
    },
  });

  return (
    <div className="container mx-auto">
      <Table columns={columns.concat(selectAction)} data={data} error={error} />
    </div>
  );
}
