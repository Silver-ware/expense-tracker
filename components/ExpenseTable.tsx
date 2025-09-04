import { ExpensesDataInterface } from "@/app/(private)/home/page";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ExpenseTable({
  expensesData,
}: {
  expensesData: ExpensesDataInterface[];
}) {
  return (
    <Table className="w-full">
      <TableCaption className="mt-0 py-2 w-full border-t border-dashed">List of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow className="text-lg sticky top-0 bg-background shadow-sm shadow-blue-50 hover:bg-background">
          <TableHead className="w-[152px] py-2 pl-6">Date</TableHead>
          <TableHead className="text-center">Category</TableHead>
          <TableHead className="text-center">Details</TableHead>
          <TableHead className="text-right pr-6">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="h-full">
        {expensesData.map((data, index) => (
          <TableRow key={index}>
            <TableCell className={`font-medium py-1.5 pl-6 ${index === 0 && "pt-1"}`}>{data.date.toLocaleString()}</TableCell>
            <TableCell className="text-center">{data.category}</TableCell>
            <TableCell className="text-center">{data.details}</TableCell>
            <TableCell className="text-right pr-6">${data.amount}.00</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
