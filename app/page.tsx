
import { createClient } from '@/app/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)
  

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
}
