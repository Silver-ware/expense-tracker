"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import AuthLayout from "@/components/auth/AuthLayout";
import { Loader2 } from "lucide-react";
// import { client } from "@/lib/supabase/client";
import Image from "next/image";
import { useEffect } from "react";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/home");
    }
  }, [router, user, loading]);

  return (
    <div className="w-full h-screen bg-background flex items-center justify-center text-foreground overflow-y-auto">
      <div className="w-[28%] h-screen flex flex-col justify-center items-center gap-1">
        {loading ? (
          <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
            <span className="font-bold text-primary text-xl">
              Please wait a moment...
            </span>
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="w-32 h-[130px] relative -mt-[22%]">
              <Image src="/icons/logo.png" alt="logo" fill />
            </div>
            <AuthLayout />
          </>
        )}
      </div>
    </div>
  );
}
