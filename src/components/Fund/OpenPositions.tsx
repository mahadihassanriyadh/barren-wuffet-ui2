import { t } from "@lingui/macro";
import Button from "../Button/Button";
import { formatDate } from "../../data/formatting";
import { createColumnHelper, ColumnDef, Row } from "@tanstack/react-table";
import Table from "../Table/Table";
import { Position, PositionType } from "../../api/models";
import { useQuery } from "@tanstack/react-query";
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
    cell: (info) => f$(info.getValue() || 0),
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
      const assetPrices: { asset: string; price: number }[] =
        info.getValue() || [];
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

const spotPositionsColumns = commonColumns.concat(spotActionColumns);

const lpActionColumns: ColumnDef<Position, any>[] = [
  {
    id: "action",
    header: t`Action`,
    cell: ({ row }: { row: Row<Position> }) => {
      return <Button label={t`Unstake`} onClick={() => {}} disabled={false} />;
    },
  },
];

const lpPositionsColumns = commonColumns
  .concat(lpColumns)
  .concat(lpActionColumns);

const OpenPositions = (props: {}) => {
  const { data, error } = useQuery<Position[], string>(
    ["positions/open"],
    api.getPositions.bind(api)
  );

  const spotPositions = data
    ? data.filter((p: Position) => p.position_type === PositionType.SPOT)
    : data;

  const lpPositions = data
    ? data.filter((p: Position) => p.position_type === PositionType.LP)
    : data;

  return (
    <div>
      <Tabs
        options={[
          {
            label: t`Perps/Swaps`,
            content: (
              <Table
                data={spotPositions}
                columns={spotPositionsColumns}
                error={error}
              />
            ),
          },
          {
            label: t`LP`,
            content: (
              <Table
                data={lpPositions}
                columns={lpPositionsColumns}
                error={error}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

OpenPositions.whyDidYouRender = true;

export default OpenPositions;
