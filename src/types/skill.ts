// 技データ構造
export interface Skill {
  name: string;
  type: string;
  category: string;
  damagePerTurn: string;
  energyPerTurn: string;
  cooldownTime: string;
}

// クイズ用技データ
export interface QuizSkill extends Skill {
  power?: number;
  accuracy?: number;
  description?: string;
}