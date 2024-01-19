import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

async function getData() {
  try {
    const response = await axios.get("http://localhost:3000/api/patients/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const DataTableRowActions = ({ row }: any) => {
  console.log(row);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/patients/${id}`
      );
      console.log(`Successfully deleted ${id}`, response.status);
    } catch (error: any) {
      console.error(`Error deleting ${id}:`, error.message);
    }
  };

  return (
    <div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className=" cursor-pointer">
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DataTableRowActions;
