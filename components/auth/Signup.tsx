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
import { useState } from "react";
import { Eye, EyeOff, NotebookPen, UserRoundPlus } from "lucide-react";

const Signup = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "password" | "text"
  >("password");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;
    const confirmPassword = (
      form.elements.namedItem("confirm-password") as HTMLInputElement
    )?.value;
    console.log(email, password, confirmPassword);

    if ([email, password, confirmPassword].some((str) => !str)) {
      toast.warning("Fill all the form fields.");
      return;
    }

    if (confirmPassword !== password) {
      toast.error("Password does not match.");
      return;
    }

    const { data, error } = await client.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Something went wrong:", error.message);
      return;
    }

    if (data) {
      toast.info("Please confirm your email.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-primary gap-1">
          <NotebookPen className="w-5 h-5" />
          <span>Get Started</span>
        </CardTitle>
        <CardDescription>
          Create an account to keep track of your spending.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form onSubmit={handleSignup} id="signup-form" className="grid gap-3">
          <div className="grid gap-3">
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
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
          <div className="grid gap-3">
            <Label htmlFor="confirm-password">Confirm Password:</Label>

            <div className="w-full h-fit relative">
              <Input
                id="confirm-password"
                type={confirmPasswordType}
                className="pr-10"
              />
              {confirmPasswordType === "password" ? (
                <Eye
                  className="w-5 h-5 text-primary absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setConfirmPasswordType((prev) =>
                      prev === "text" ? "password" : "text"
                    );
                  }}
                />
              ) : (
                <EyeOff
                  className="w-5 h-5 text-primary absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setConfirmPasswordType((prev) =>
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
        <Button type="submit" form="signup-form" className="w-full">
          <UserRoundPlus className="w-5 h-5"/>
          Signup
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Signup;
