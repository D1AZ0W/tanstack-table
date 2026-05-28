import { useState } from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { data } from "./data.ts";
import "./index.css";

type dataType = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  gender: string;
  linkedin_skills: string;
};

const columnHelper = createColumnHelper<dataType>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("first_name", {
    header: "First Name",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("last_name", {
    header: "Last Name",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("username", {
    header: "Username",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (row) => row.getValue(),
  }),
  columnHelper.accessor("linkedin_skills", {
    header: "LinkedIn Skills",
    cell: (row) => row.getValue(),
  }),
];

export default function App() {
  const [tableData, setTableData] = useState(data);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());

  return (
    <div>
      <h1 className="text-3xl text-amber-300 font-extrabold text-center p-5 m-5">
        TanStack Paginated Table
      </h1>
      <div className="m-3">
        <table className=" min-w-full border border-collapse border-gray-200 ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={`${
                      index == 0
                        ? "min-w-[50px] max-w-[50px]"
                        : "min-w-[200px] max-w-[200px]"
                    } border text-center border-gray-300 px-4 py-2 bg-slate-600`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext,
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cells, index) => (
                  <td
                    key={cells.id}
                    className={`${
                      index == 0
                        ? "min-w-[50px] max-w-[50px]"
                        : "min-w-[200px] max-w-[200px]"
                    } border text-center border-gray-300 px-4 py-2 `}
                  >
                    {flexRender(
                      cells.column.columnDef.cell,
                      cells.getContext(),
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
