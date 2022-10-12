import React, { FC } from "react";
import { flexRender, Table as TableType } from "@tanstack/react-table";

interface TableProps<T> {
  table: TableType<T>;
  error: string | null;
}

const Table: FC<TableProps<any>> = ({ table, error }) => {
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {error && (
          <tr>
            <td colSpan={table.getHeaderGroups()[0].headers.length}>{error}</td>
          </tr>
        )}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
