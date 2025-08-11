import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  logIn: () => set(() => ({ isLoggedIn: true })),
  logOut: () => set(() => ({ isLoggedIn: false })),
}));
