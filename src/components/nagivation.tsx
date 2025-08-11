"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAuthStore } from "@/store/auth";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";

const navigationItems: { link: string; title: string }[] = [
  { link: "/quiz", title: "クイズ" },
  { link: "/adventure", title: "アドベンチャー" },
  { link: "/result", title: "結果" },
  { link: "/pokedex", title: "図鑑" },
  { link: "/ranking", title: "ランキング" },
  { link: "/setting", title: "設定 " },
];

function NavigationItems() {
  return navigationItems.map((item) => (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link href={item.link}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));
}

export default function Navigation() {
  const isLoggedIn = useAuthStore((store) => store.isLoggedIn);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 px-4 flex items-center justify-between">
        {/** トップページ */}
        <Link href="/">
          <p className="text-lg font-bold">ポケモンクイズ</p>
        </Link>

        {/** 各ナビゲーション */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItems></NavigationItems>
          </NavigationMenuList>
        </NavigationMenu>

        {/** ログイン/ログアウト */}

        {isLoggedIn ? (
          <Link href="/login">
            <div className="flex gap-2">
              <LogOut /> ログアウト
            </div>
          </Link>
        ) : (
          <Link href="/login">
            <div className="flex gap-2">
              <LogIn /> ログイン
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
