import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
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

        {/** TODO: ログアウト */}
        <p>ログアウト</p>
      </div>
    </header>
  );
}
