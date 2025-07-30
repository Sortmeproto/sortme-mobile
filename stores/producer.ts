import { create } from "zustand";

export const useProducer = create<{
  recent: any[];
  draft: any;
  setDraft: (draft: any) => void;
  clearDraft: () => void;
}>(set => ({
  recent: [],
  draft: {},
  setDraft: draft => set({ draft }),
  clearDraft: () => set({ draft: {} })
}));