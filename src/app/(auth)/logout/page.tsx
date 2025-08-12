"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function LogOut() {
  const { logOut } = useAuth();

  useEffect(() => {
    logOut();
  }, []);

  return (
    <div className="text-center pt-20">
      <h1>ログアウトしました</h1>
    </div>
  );
}
