// アドベンチャーモード完走ランキング
export interface RankingEntry {
  id: string;
  userId: string;
  userName: string;
  score: number;
  completedAt: Date;
}

// ランキング表示用データ
export interface RankingDisplayData extends RankingEntry {
  rank: number;
  isCurrentUser?: boolean;
}