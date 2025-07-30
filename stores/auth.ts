import { create } from "zustand";

export const useAuth = create<{ user: null | { role: "producer" | "collector" }; setUser: (u: any) => void }>(set => ({
  user: null,
  setUser: user => set({ user })
}));