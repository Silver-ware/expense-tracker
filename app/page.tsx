"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import AuthLayout from "@/components/auth/AuthLayout";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (!loading && user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="w-full h-screen bg-background flex items-center justify-center text-foreground">
      <div className="w-[25%] h-[80%] flex items-center">
        {loading ? <div>Loading...</div> : <AuthLayout/>}
      </div>
    </div>
  );
}
