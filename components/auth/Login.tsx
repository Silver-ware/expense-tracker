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
import { Eye, EyeOff, Key, HandCoins } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    if(!email || !password) {
      toast.warning("Email or Password is required.");
      return;
    }

    const { error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) console.error("Something went wrong:", error.message);
  };

  return (
    <Card>
      <CardHeader>
          <CardTitle className="flex items-center text-primary gap-1">
          <HandCoins className="w-5 h-5" />
          <span>Open Your Account</span>
        </CardTitle>
        <CardDescription>
          Log in and manage your expenses easily.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form id="login-form" className="grid gap-6" onSubmit={handleLogin}>
          <div className="grid gap-3">
            <Label htmlFor="email">Email:</Label>
            <div className="w-full h-fit relative">
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password:</Label>
            <div className="w-full h-fit relative">
              <Input id="password" type={passwordType} className="pr-10" />
              {passwordType === "password" ? (
                <Eye
                  className="w-5 h-5 text-primary absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setPasswordType((prev) =>
                      prev === "text" ? "password" : "text"
                    );
                  }}
                />
              ) : (
                <EyeOff
                  className="w-5 h-5 text-primary absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setPasswordType((prev) =>
                      prev === "text" ? "password" : "text"
                    );
                  }}
                />
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="login-form" className="w-full">
          <Key className="w-5 h-5" />
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
