"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  BicepsFlexed,
  Gamepad2,
  LucideIcon,
  Settings as SettingsIcon,
  Target,
  Timer,
} from "lucide-react";

type Difficult = "easy" | "normal" | "hard" | "master";

interface SelectOption<T> {
  label: string;
  value: T;
}

const difficultyOptions: SelectOption<Difficult>[] = [
  { label: "簡単 🌱", value: "easy" },
  { label: "普通 ⚡️", value: "normal" },
  { label: "難しい 🔥", value: "hard" },
  { label: "ポケモンマスター 👑", value: "master" },
];

const quizCountOptions: number[] = [5, 10, 15];

type ColorVariant = "cyan" | "pink" | "yellow";

const colorVariants: Record<ColorVariant, string> = {
  cyan: "text-cyan-600 bg-cyan-100",
  pink: "text-pink-600 bg-pink-100",
  yellow: "text-yellow-600 bg-yellow-100",
};

const SettingItem = ({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: LucideIcon;
  color: ColorVariant;
  title: string;
  children: React.ReactNode;
}) => {
  const iconClassName = `rounded-full p-1 ${colorVariants[color]}`;

  return (
    <div
      className="flex justify-between items-center max-w-screen py-6 
                 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      <div className="flex items-center gap-2">
        <div className={iconClassName}>
          <Icon />
        </div>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};

export default function Settings() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-row items-center gap-2 pt-4">
        <SettingsIcon size={40} /> <p className="text-3xl font-bold">設定</p>
      </div>
      <p>あなた好みにカスタマイズしよう！</p>
      <Card className="w-2xl">
        <CardHeader className="flex items-center gap-2">
          <Gamepad2 className="text-cyan-700" />
          <p className="font-bold text-lg">ゲーム設定</p>
        </CardHeader>

        <CardContent className="px-8">
          {/* 難易度 */}
          <SettingItem icon={BicepsFlexed} color="cyan" title="難易度">
            <Select defaultValue={"easy"}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>難易度</SelectLabel>
                  {difficultyOptions.map((select) => (
                    <SelectItem key={select.value} value={select.value}>
                      {select.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </SettingItem>

          <Separator />

          {/* 出題数 */}
          <SettingItem icon={Target} color="pink" title="出題数">
            <Select defaultValue={"10"}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>出題数</SelectLabel>
                  {quizCountOptions.map((count) => (
                    <SelectItem key={count} value={`${count}`}>
                      {`${count} 件`}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </SettingItem>

          <Separator />

          {/* 制限時間設定 */}
          <SettingItem icon={Timer} color="yellow" title="制限時間">
            <Switch id="time-limit-mode" />
          </SettingItem>
        </CardContent>
      </Card>
    </div>
  );
}
