"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
      toast.error("Please login first");
    }
  }, [router, user]);

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F3F2F3]">
      <div className="w-[75%] h-[90vh] rounded-lg shadow-xl border-t border-primary/50">
        <Navbar />
        <div className="w-full h-full p-4">{children}</div>
      </div>
    </div>
  );
}
