/* eslint-disable no-self-compare */
import React, { useEffect } from "react";

import { t } from "@lingui/macro";

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  Row,
  ColumnDef,
} from "@tanstack/react-table";

import { formatDate, numberWithCommas } from "../../data/formatting";
import Table from "../Table/Table";
import useSWR from "swr";
import { Fund, FundStatus } from "../../api/models";
import { api } from "../../config/env";
import upIcon from "../../img/icons/upIcon.svg";
import downIcon from "../../img/icons/downIcon.svg";
import Button from "../Button/Button";
import BorderlessButton from "../Button/BorderlessButton";


const GenericColumn = (props: {type?: string, status?: string, label?: string, changedPercent?: number, logo?: string, name?: string, row?: any, text?: string}) => {
  switch (props.type) {
    case "status":
      return <>
        <p className="text-xs font-medium bg-[#1d1d21] text-center py-1.5 px-3 rounded-2xl">
          {props.status}
        </p>
      </>
    case "changePercent":
      return <>
        <div className="flex items-center justify-between space-x-4">
          <p className="font-bold">
            {Math.abs(props.changedPercent || 0)}
          </p>
          <img className={`${props.changedPercent || 0 >= 0 ? 'bg-[#072213]' : 'bg-[#301616]'} p-1.5 rounded-full`} src={props.changedPercent || 0 >= 0 ? upIcon : downIcon} alt="" />
        </div>
      </>
    case "name":
      return <>
        <div className="flex items-center space-x-4">
          <img src={props.logo} alt="" />
          <h4 className="font-bold">
            {props.name}
          </h4>
        </div>
      </>
    case "amount":
      const isPos = props.row?.change_percent >= 0 ? true : false
      return <>
        <div className="flex items-center justify-between space-x-4">
          <p className={`text-sm ${isPos ? "text-green-400" : "text-red-400"}`}>
            {numberWithCommas(props.row?.amount_raised)}
          </p>
        </div>
      </>
    default:
      return <>
        <p className="text-sm text-gray-300">
          {props.text}
        </p>
      </>
  }
}



const columnHelper = createColumnHelper<Fund>();

const columns: ColumnDef<Fund, any>[] = [
  columnHelper.accessor((row) => row.name, {
    header: t`Name`,
    cell: (info) => (
      // <FundName name={info} />
      <GenericColumn name={info.getValue()} logo="" type="name" />
    )
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
      <GenericColumn changedPercent={info.getValue() ? (
        Math.round(info.getValue() * 10000) / 100
      ) : 0} type="changePercent" />
    )
  }),
  // numberWithCommas(info.getValue())
  columnHelper.accessor(row => row, {
    header: t`Amount Raised`,
    cell: (info) => <GenericColumn  row={info.getValue()} type="amount" />,
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
  }),
  columnHelper.accessor("status", {
    header: t`Status`,
    cell: (info) => <GenericColumn status={FundStatus[info.getValue()].toLowerCase()} type="status" />,
  }),
  columnHelper.accessor("manager", {
    header: t`Manager`,
    cell: (info) => info.getValue(),
  }),
  {
    id: "action",
    header: t`Action`,
    cell: ({ row }: { row: Row<Fund> }) => {
      const status = row.getValue("status");
      if (status === FundStatus.RAISING) {
        return (
          <Button
            onClick={() => investInFund(row.getValue("id"))}
            disabled = { false}
            label={t`Invest`}
          />
        );
      } else if (
        status === FundStatus.CLOSED ||
        status === FundStatus.CLOSABLE
      ) {
        return <></>;
      } else if (status === FundStatus.DEPLOYED) {
        return (
          <BorderlessButton label="See Investment" />
        );
      }
    },
  },
];

function investInFund(fundId: string): void {
  throw new Error("Function not implemented.");
}

export default function FundsList() {
  const { data, error } = useSWR("/api/funds", api.getFunds.bind(api));

  const table = useReactTable<Fund>({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="container mx-auto">
      <Table table={table} error={error} />
    </div>
  );
}
