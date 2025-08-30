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

const Login = () => {
   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;
    // console.log(email, password);

    const {error} = await client.auth.signInWithPassword({
      email,
      password
    })

    if (error) console.error("Something went wrong:", error.message);
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>View your Account</CardTitle>
        <CardDescription>
          Login to your account to track your expenses.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form id="login-form" className="grid gap-6" onSubmit={handleLogin}>
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
        <Button type="submit" form="login-form" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
