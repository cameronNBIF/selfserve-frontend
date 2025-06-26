"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Investment = {
  RefNum: string
  CompanyName: string
  ApplTitle: string
  AmtAwarded: number
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
  },
  {
    accessorKey: "AmtAwarded",
    header: "AmtAwarded",
  },
]