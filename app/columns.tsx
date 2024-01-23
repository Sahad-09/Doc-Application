"use client";
import axios from "axios";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/DataTableColumnHeader ";
import DataTableRowActions from "@/components/DataTableRowActions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  name: string;
  age: number;
  sex: string;
  contact: string;
  dateTime: Date;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "id",
    header: "Serial No",
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Age" />;
    },
  },
  {
    accessorKey: "sex",
    header: "Sex",
  },
  {
    accessorKey: "contact",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Contact" />;
    },
  },
  {
    accessorKey: "dateTime",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="DateTime" />;
    },
  },
  {
    id: "actions",
    cell: ({ row }: any) => {
      return <DataTableRowActions row={row} />;
    },
  },
];
