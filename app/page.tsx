"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import AuthLayout from "@/components/auth/AuthLayout";
import { client } from "@/lib/supabase/client";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const logout = async () => {
    await client.auth.signOut();
  };

  if (!loading && user) {
    // router.push("/dashboard");
    // return null;
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <button className="px-3 py-1.5 rounded border" onClick={logout}>Signout</button>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-background flex items-center justify-center text-foreground">
      <div className="w-[25%] h-[80%] flex items-center">
        {loading ? <div>Loading...</div> : <AuthLayout/>}
      </div>
    </div>
  );
}
