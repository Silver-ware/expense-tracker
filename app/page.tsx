"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import AuthLayout from "@/components/auth/AuthLayout";
import { client } from "@/lib/supabase/client";
import Image from "next/image";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const logout = async () => {
    await client.auth.signOut();
  };

  if (!loading && user) {
    router.push("/home");
    return null;
    // return (
    //   <div className="w-full h-screen flex items-center justify-center">
    //     <button className="px-3 py-1.5 rounded border" onClick={logout}>
    //       Signout
    //     </button>
    //   </div>
    // );
  }

  return (
    <div className="w-full h-screen bg-background flex items-center justify-center text-foreground overflow-y-auto">
      <div className="w-[25%] h-fit flex flex-col justify-start items-center gap-1">
        <div className="w-32 h-[130px] relative">
          <Image src="/icons/logo.png" alt="logo" fill />
        </div>
        {loading ? <div>Loading...</div> : <AuthLayout />}
      </div>
    </div>
  ) 
}
