"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { Label } from "@radix-ui/react-label";
import { AlertCircleIcon, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { logIn } = useAuth();
  const router = useRouter();
  const [hasError, setError] = useState(false);

  const login = (form: FormData) => {
    const emailAddress = form.get("email") as string;
    const password = form.get("password") as string;

    logIn(emailAddress, password)
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="flex justify-center p-20">
      <Card className="w-[400px]">
        <CardHeader>ログイン</CardHeader>
        <CardContent>
          <form
            id="loginForm"
            className="grid justify-center grid-cols-1 gap-4"
            action={login}
          >
            <div className="">
              <Label htmlFor="email">メールアドレス</Label>
              <Input type="email" name="email" />
            </div>
            <div>
              <Label htmlFor="password">パスワード</Label>
              <Input type="password" name="password" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-4">
            {hasError && (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>
                  メールアドレスかパスワードが間違っています
                </AlertTitle>
              </Alert>
            )}
            <Button form="loginForm" type="submit" className="w-full">
              <LogIn /> ログイン
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
