"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Investment = {
  RefNum: string
  CompanyName: string
  ApplTitle: string
  AmtAwarded: number
  Province: string
  City: string
}

export const columns: ColumnDef<Investment>[] = [
  {
    accessorKey: "RefNum",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Refnum
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "CompanyName",
    header: "CompanyName",
  },
  {
  accessorKey: "ApplTitle",
  header: "ApplTitle",
  size: 200,
  cell: ({ row }) => {
    const title = row.getValue("ApplTitle") as string
    return (
      <div 
        className="overflow-hidden text-ellipsis whitespace-nowrap cursor-help" 
        title={title}
        style={{ width: '350px', maxWidth: '350px' }}
      >
        {title}
      </div>
    )
  },
},
  {
    accessorKey: "AmtAwarded",
    header: "AmtAwarded",
  },
  {
    accessorKey: "Province",
    header: "Province",
  },
  {
    accessorKey: "City",
    header: "City",
  },
]