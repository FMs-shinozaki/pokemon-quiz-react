'use client';

import Image from 'next/image';
import pokemonData from '@/data/pokemon_data.json';
import { useState, useEffect } from 'react';

export default function Quiz() {
  const [randomPokemonNumber, setRandomPokemonNumber] = useState<number | null>(null);

  useEffect(() => {
    // 1~807のランダムな数字を生成
    const newRandomNumber = Math.floor(Math.random() * 807) + 1;
    setRandomPokemonNumber(newRandomNumber);
  }, []);

  // ローディング状態の確認
  if (randomPokemonNumber === null) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">読込中...</p>
        </div>
      </div>
    );
  }

  console.log(
    '取得したポケモンデータ:',
    pokemonData[randomPokemonNumber - 1]
  );

  // 3桁0埋めのポケモン番号を生成
  const pokemonNumberFormatted = randomPokemonNumber
    .toString()
    .padStart(3, '0');

  // 動的な画像パスを生成（public配下）
  const pokemonImagePath = `/pokemon/picture/${pokemonNumberFormatted}.png`;

  // 選択肢の変数を定義
  //TODO: 選択肢の生成
  const answer1 = 'ゼニガメ';
  const answer2 = 'ヒトカゲ';
  const answer3 = 'フシギダネ';
  const answer4 = 'ピカチュウ';
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* 問題文 */}
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            このポケモンの名前は何でしょう？
          </p>
        </div>

        {/* ポケモン画像 */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={pokemonImagePath}
              alt="ポケモン"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
        </div>

        {/* 回答ボタン */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
            {answer1}
          </button>
          <button className="px-6 py-3 text-white font-semibold rounded-lg bg-red-500 hover:bg-red-600 transition-colors">
            {answer2}
          </button>
          <button className="px-6 py-3 text-white font-semibold rounded-lg bg-green-500 hover:bg-green-600 transition-colors">
            {answer3}
          </button>
          <button className="px-6 py-3 text-white font-semibold rounded-lg bg-yellow-500 hover:bg-yellow-600 transition-colors">
            {answer4}
          </button>
        </div>
      </div>
    </div>
  );
}
