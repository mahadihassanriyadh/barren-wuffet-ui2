import React, { FC } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Table as TableType,
  useReactTable,
} from "@tanstack/react-table";

interface TableProps<T> {
  data?: T[];
  columns: ColumnDef<T, any>[];
  error: string | null;
}

const Table: FC<TableProps<any>> = ({ data, columns, error }) => {
  const table = useReactTable<any>({
    data: data || [],
    columns: columns || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="text-center font-sans text-xs text-gray-500 font-normal py-8"
                key={header.id}
              >
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
      <tbody className="border-t border-gray-600">
        {error && (
          <tr>
            <td colSpan={table.getHeaderGroups()[0].headers.length}>{error}</td>
          </tr>
        )}
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="mr-4 px-8 py-2 font-sans" key={cell.id}>
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
