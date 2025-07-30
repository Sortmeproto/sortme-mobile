import { create } from "zustand";

export const useCollector = create<{
  jobs: any[];
  active: any;
  setActive: (job: any) => void;
}>(set => ({
  jobs: [],
  active: null,
  setActive: job => set({ active: job })
}));