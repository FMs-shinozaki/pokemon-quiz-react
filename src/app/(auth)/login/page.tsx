"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Firebase from "@/lib/firebase";
import { useAuthStore } from "@/store/auth";
import { Label } from "@radix-ui/react-label";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const logIn = useAuthStore((store) => store.logIn);
  const router = useRouter();

  const login = (form: FormData) => {
    // TODO: react-form-hooks を利用したものに変更
    // TODO: 値検証、エラーメッセージの掲出

    signInWithEmailAndPassword(
      Firebase.instance.auth,
      form.get("email") as string,
      form.get("password") as string
    ).then((userCredential) => {
      const user = userCredential.user;

      console.log(user);

      // state設定
      logIn();

      router.push("/");
    });
  };

  return (
    <div className="flex justify-center p-20">
      <Card className="min-w-sm">
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
          <Button form="loginForm" type="submit">
            <LogIn /> ログイン
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
