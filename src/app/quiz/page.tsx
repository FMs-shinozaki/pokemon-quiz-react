import Image from 'next/image';
//レイアウト確認の為、ポケモン画像仮設定
import pokemonImage from '@/data/images/pokemon/picture/001.png';

export default function Quiz() {
  // 選択肢の変数を定義
  const answer1 = 'ゼニガメ';
  const answer2 = 'ヒトカゲ';
  const answer3 = 'フシギダネ';
  const answer4 = 'ピカチュウ';
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* 問題文表 */}
        <div className="text-center mb-8">
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            このポケモンの名前は何でしょう？
          </p>
        </div>

        {/* ポケモン画像 */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={pokemonImage}
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
