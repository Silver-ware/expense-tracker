import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent } from "react";
import { toast } from "sonner";
import { client } from "@/lib/supabase/client";

const Signup = () => {
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;
    // console.log(email, password);

    const {data, error} = await client.auth.signUp({
      email,
      password
    })

    if (error) console.error("Something went wrong:", error.message);

    if(data){
      const {error: signOutError} = await client.auth.signOut();
      if(signOutError) console.error("Something went wrong signing out", error?.message)
      toast.success("Sign up success. Please login now.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your Account</CardTitle>
        <CardDescription>
          Track your expenses by creating an account.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form onSubmit={handleSignup} id="signup-form" className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="signup-form" className="w-full">Signup</Button>
      </CardFooter>
    </Card>
  );
};

export default Signup;
