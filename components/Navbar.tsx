import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { client } from "@/lib/supabase/client";
import { toast } from "sonner";

const navigationLinks = [
  {
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    href: "/transactions",
    title: "Transactions",
  },
  {
    href: "/profile",
    title: "Profile",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const backToHome = () => {
    router.replace("/home");
  }

  const signOut = () => {
    client.auth.signOut();
    router.replace("/");
    toast.success("Log out successfully.");
    return null;
  }

  return (
    <div className="py-7 pl-10 pr-6 flex justify-between h-fit w-full">
      <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => backToHome()}>
        <span className="relative w-10 h-11">
          <Image src="/icons/logo-no-text.png" alt="logo-with-no-text" fill />
        </span>
        <span className="font-extrabold text-4xl">Expense Tracker</span>
      </div>

      <div className="flex items-center gap-5 text-xl">
        {navigationLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`border-b ${pathname.includes(link.href) ? " border-b-primary" : "border-b-transparent hover:border-b-primary"}`}
          >
            {link.title}
          </Link>
        ))}
        <button className="bg-destructive hover:bg-red-700 rounded-sm py-1 px-3 text-white flex gap-1 items-center cursor-pointer" onClick={signOut}>
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
