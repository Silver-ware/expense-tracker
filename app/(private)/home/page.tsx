import ExpenseTable from "@/components/ExpenseTable";
import { Button } from "@/components/ui/button";
import { BanknoteArrowDown } from "lucide-react";
import { use } from "react";
import { serverClient } from "@/lib/supabase/server";
import TotalSpent from "./total";
import RemainingBudget from "./remaining";
import {
  TotalExpenses,
  RemainingBudget as RemainingBudgetType,
} from "@/components/Types";

export const recentExpensesData = [
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
  },
];

function fetchTransactions() {
  const supabase = serverClient();
  return supabase
    .from("transactions")
    .select(`amount, when, category(text)`)
    .eq("type", "cash-out")
    .then((res) => {
      if (res.error) throw res.error;
      return res.data as unknown as TotalExpenses[];
    });
}

function fetchBudget() {
  const supabase = serverClient();
  return supabase
    .from("budget")
    .select(`amount, period, category(text)`)
    .then((res) => {
      if (res.error) throw res.error;
      return res.data as unknown as RemainingBudgetType[];
    });
}

export default function Page() {
  const transactionsPromise = fetchTransactions();
  const bugdetPromise = fetchBudget();

  const totalSpent = use(transactionsPromise);
  const remainingBudget = use(bugdetPromise);
  // console.log(transactions, budget);

  return (
    <div className="h-full flex flex-col w-full">
      {/* Head Section */}
      <div className="h-[125px] w-full flex items-center rounded-xl py-2 shadow-sm shadow-gray-200">
        <div className="flex w-1/2 flex-col gap-1 pl-10 h-full border-r border-gray-200 pt-3">
          <TotalSpent transactions={totalSpent ?? []} />
        </div>
        <div className="flex w-1/2 flex-col gap-1 h-full pl-10 pt-3">
          <RemainingBudget budgets={remainingBudget ?? []} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 pt-5 px-4">
        <Button className="text-background">
          <BanknoteArrowDown />
          <span className="text-lg">Add Expenses</span>
        </Button>
        <div className="rounded-md shadow-sm shadow-gray-200 w-full max-h-[240px] overflow-y-auto">
          <ExpenseTable expensesData={recentExpensesData} />
        </div>
      </div>
    </div>
  );
}
