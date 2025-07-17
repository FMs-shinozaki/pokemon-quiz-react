"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-center text-white bg-gradient-to-br from-sky-400 from-0% via-violet-600 via-50% to-violet-800 to-100%">
      <div className="max-w-3xl mx-auto py-20">
        <p className="font-bold text-5xl mb-10 pt-2">ポケモンクイズ</p>
        <p className="text-2xl text-yellow-200 pb-10">
          あなたのポケモン知識を試そう！
          <br></br>
          初代から最新作まで、幅広い問題でトレーナーレベルをチェック
        </p>
        <Button
          className="bg-amber-300 text-gray-800 hover:bg-amber-100"
          size="lg"
          onClick={() => router.push("/quiz")}
        >
          クイズを始める
        </Button>
      </div>
    </div>
  );
}
