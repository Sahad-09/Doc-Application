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
import Link from "next/link";

const DataTableRowActions = (row: any) => {
  const site = row.row.original;
  // console.log("Site", site);

  const rowDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/api/patients/${site.id}`
      );
      console.log(`Successfully deleted ${site.id}`, response.status);
    } catch (error: any) {
      console.error(`Error deleting ${site.id}:`, error.message);
    }
    window.location.reload();
  };

  return (
    <>
      <div className=" flex  justify-between ">
        <div className=" self-center">
          <Link href={`/${site.id}`}>
            <Button>View</Button>
          </Link>{" "}
        </div>
        <div className=" self-center">
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
              <DropdownMenuItem onClick={rowDelete}>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default DataTableRowActions;
