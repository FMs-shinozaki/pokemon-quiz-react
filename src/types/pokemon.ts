// ポケモンのタイプ定義
export type PokemonType = 
  | "ノーマル" | "ほのお" | "みず" | "でんき" | "くさ" | "こおり"
  | "かくとう" | "どく" | "じめん" | "ひこう" | "エスパー" | "むし"
  | "いわ" | "ゴースト" | "ドラゴン" | "あく" | "はがね" | "フェアリー";

// ポケモンのステータス
export interface PokemonStatus {
  hp: number;
  attack: number;
  defence: number;
  spAttack: number;
  spDefence: number;
  speed: number;
}

// ポケモン基本データ構造
export interface Pokemon {
  no: number;
  name: string;
  form: string;
  isMegaEvolution: boolean;
  evolutions: number[];
  types: PokemonType[];
  abilities: string[];
  hiddenAbilities: string[];
  status: PokemonStatus;
}

// 図鑑用検索・フィルター条件
export interface PokemonSearchFilters {
  name?: string;
  types?: PokemonType[];
  generation?: number;
  isMegaEvolution?: boolean;
}

// 図鑑表示モード
export type PokemonDisplayMode = "grid" | "list";

// ポケモン世代定義
export interface PokemonGeneration {
  generation: number;
  name: string;
  range: [number, number]; // [開始番号, 終了番号]
}

// クイズで使用するポケモンデータ
export interface QuizPokemon extends Pokemon {
  imageUrl?: string;
  difficulty?: "easy" | "normal" | "hard";
}