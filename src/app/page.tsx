"use client";

import { Button } from "@/components/ui/button";
import { Play, Trophy } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-sky-400 from-0% via-violet-600 via-50% to-violet-800 to-100%">
      <div className="max-w-3xl mx-auto py-20 text-center">
        <div className="flex justify-center gap-3 mb-10">
          <Image
            width={50}
            height={50}
            src="icons/pokeball-pokemon-svgrepo-com.svg"
            alt="pokemon ball"
          ></Image>
          <p className="font-bold text-5xl">ポケモンクイズ</p>
        </div>
        <p className="text-2xl text-yellow-200 pb-10">
          あなたのポケモン知識を試そう！
          <br></br>
          初代から最新作まで、幅広い問題でトレーナーレベルをチェック
        </p>
        <div className="flex justify-center gap-4">
          <Button
            className="bg-amber-300 text-amber-900 hover:bg-amber-100 font-bold"
            size="lg"
            onClick={() => router.push("/quiz")}
          >
            <Play></Play>
            クイズを始める
          </Button>
          <Button
            className="bg-amber-300 text-amber-900 hover:bg-amber-100 font-bold"
            size="lg"
            onClick={() => router.push("/ranking")}
          >
            <Trophy></Trophy>
            ランキングを見る
          </Button>
        </div>
      </div>
    </div>
  );
}
