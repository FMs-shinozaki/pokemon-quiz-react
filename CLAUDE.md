# CLAUDE.md

## プロジェクト概要

- フレームワーク: Next.js 14 (App Router)
- 言語: TypeScript
- スタイル: Tailwind CSS + shadcn/ui
- アニメーション: framer-motion
- 状態管理: Zustand
- バリデーション/フォーム: React Hook Form + Zod
- BaaS: Firebase Authentication + Firestore
- テスト: Vitest + Testing Library
- デプロイ: Firebase Hosting
- CI/CD: GitHub Actions

## 開発方針

- ディレクトリ構成:
  - `app/`：ページとレイアウト（App Router）
  - `components/`：UI・再利用コンポーネント
  - `hooks/`：カスタムフック
  - `lib/`：Firebase や API 関連ユーティリティ
  - `store/`：Zustand のグローバル状態
  - `types/`：型定義
- UI 設計: shadcn/ui を基盤に Tailwind で調整
- アイコン: `lucide-react`または`/public/icons/`の自作 SVG
- コードスタイル: ESLint + Prettier を遵守
- 状態管理は Zustand、Context API の多用は避ける
- Next.js の`'use client'`指定は必要最小限

## レビュー指摘例

- 不要な SSR/SSG 設定や App Router 構造違反
- Zustand や Firebase の不適切な呼び出し
- shadcn/ui の className 乱用や UI 一貫性欠如
- tailwind.config.js に未定義のカラー/フォント使用
- next/image 未使用での画像最適化不足
- TypeScript 型の不備（any 多用、型安全性欠如）
- ディレクトリ構成の逸脱や肥大化

## ベストプラクティス

- `app/`配下はセグメント分割と`layout.tsx`の適切な利用
- Firestore 操作は`lib/firestore.ts`に集約
- クライアントコンポーネントとサーバーコンポーネントを意識的に分離
- UI は shadcn/ui コンポーネント拡張で一貫性保持
- フォームは React Hook Form + Zod のスキーマバリデーション
- 画像は`next/image`または SVGR コンポーネント利用
