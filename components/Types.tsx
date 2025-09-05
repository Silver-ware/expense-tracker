export type CategoryTypes = {text: string}
export type PeriodTypes = "weekly" | "monthly" | "bi-weekly" | "daily"

export interface TotalExpenses {
  amount: number;
  when: Date | string;
  category: CategoryTypes
}

export interface RemainingBudget {
  amount: number;
  period: PeriodTypes;
  category: CategoryTypes;
}

export type HomeTransactionEntry = { category: string; amount: number };
