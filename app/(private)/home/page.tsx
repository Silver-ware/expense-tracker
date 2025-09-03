import ExpenseTable from "@/components/ExpenseTable";
import { Button } from "@/components/ui/button";
import { BanknoteArrowDown } from "lucide-react";

export interface ExpensesDataInterface {
  date: string | Date;
  category: string;
  details: string;
  amount: number;
  type: "cash-in" | "cash-out";
}

export const recentExpensesData: ExpensesDataInterface[] = [
  {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  },
   {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  },
   {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  },
   {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  },
   {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  },
   {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  },
   {
    date: "September 2, 2025",
    category: "Food",
    details: "Bought Apple",
    amount: 200,
    type: "cash-in",
  }
]

export default function Page() {
  return (
    <div className="h-full flex flex-col w-full">
      {/* Head Section */}
      <div className="h-fit w-full flex rounded-xl shadow-sm shadow-gray-200">
        <div className="flex basis-1/2 flex-col gap-1 py-5 pl-10 border-r border-gray-200">
          <span className="text-xl font-medium">Total Spent this Month</span>
          <span className="font-bold text-5xl">{"$0"}</span>
        </div>
        <div className="flex basis-1/2 flex-col gap-1 py-5 pl-10">
          <span className="text-xl font-medium">Remaining Budget</span>
          <span className="font-bold text-5xl">{"$550"}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 pt-5 px-4">
        <Button className="text-background">
          <BanknoteArrowDown/>
          <span className="text-lg">Add Expenses</span>
        </Button>
        <div className="rounded-md shadow-sm shadow-gray-200 w-full max-h-[240px] overflow-y-auto">
          <ExpenseTable expensesData={recentExpensesData}/>
        </div>
      </div>
    </div>
  );
}
