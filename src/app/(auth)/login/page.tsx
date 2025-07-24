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
import { Label } from "@radix-ui/react-label";
import { signInWithEmailAndPassword } from "firebase/auth";

const login = (form: any) => {
  // TODO: react-form-hooks を使った方がモダン？
  // TODO: 値検証、エラーメッセージの掲出

  signInWithEmailAndPassword(
    Firebase.instance.auth,
    form.get("email"),
    form.get("password")
  ).then((userCredential) => {
    const user = userCredential.user;

    console.log(user);

    // TODO: ログイン後の処理、画面遷移、状態保持
  });
};

export default function Login() {
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
            ログイン
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
