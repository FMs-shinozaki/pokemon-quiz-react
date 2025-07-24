// クイズ結果データ
export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  completedAt: Date;
  mode: "normal" | "adventure";
}

// 結果ページ表示用データ
export interface ResultDisplayData extends QuizResult {
  grade: "S" | "A" | "B" | "C" | "D";
  canRegisterRanking: boolean;
}