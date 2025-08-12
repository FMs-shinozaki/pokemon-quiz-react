import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  setLoggedIn: (isLoggedIn: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn: isLoggedIn })),
}));
