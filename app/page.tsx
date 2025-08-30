'use client'
import { useRouter } from "next/navigation"
import useAuth from "./hooks/useAuth"

export default function Page(){
  const {user, loading} = useAuth()
  const router = useRouter();

  if(!loading && user) {
    router.push("/dashboard")
    return null;
  }

  return(
    <div>
      {loading ? <div>Loading...</div> : <div>hello</div>}
    </div>
  )
}