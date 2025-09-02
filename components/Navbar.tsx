import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <div className="py-7 pl-10 pr-6 flex justify-between h-fit w-full">
      <div className="flex items-center gap-2 select-none cursor-pointer">
        <span className="relative w-10 h-11">
          <Image src="/icons/logo-no-text.png" alt="logo-with-no-text" fill />
        </span>
        <span className="font-extrabold text-4xl">Expense Tracker</span>
      </div>

      <div className="flex items-center gap-5 text-xl">
        <Link
          href={"/dashboard"}
          className="border-b border-b-transparent hover:border-b-primary"
        >
          Dashboard
        </Link>
        <Link
          href={"/transactions"}
          className="border-b border-b-transparent hover:border-b-primary"
        >
          Transactions
        </Link>
        <Link
          href={"/profile"}
          className="border-b border-b-transparent hover:border-b-primary"
        >
          Profile
        </Link>
        <button className="bg-destructive hover:bg-red-700 rounded-sm py-1 px-3 text-white flex gap-1 items-center cursor-pointer">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
