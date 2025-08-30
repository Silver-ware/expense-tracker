'use client'
import { ReactNode } from "react";
import { client } from "@/app/lib/supabase/client";
import { useEffect, createContext, useState } from "react" 
import { User } from "@supabase/supabase-js";

interface AuthContextInterface {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider = ({children} : {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.auth.getSession().then(({data}) => {
      setUser(data?.session?.user || null)
      setLoading(false)
    });

    const {data: listener} = client.auth.onAuthStateChange((e, session) => {
      setUser(session?.user || null)
    })

    return () => {
      listener.subscription.unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{user, loading}}>{children}</AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider,
}
