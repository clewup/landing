import { create } from "zustand";

interface SectionStore {
  inViewSection: string | null;
  setInViewSection: (section: string | null) => void;
}

const useSectionStore = create<SectionStore>((set) => ({
  inViewSection: null,
  setInViewSection: (section: string | null) => set({ inViewSection: section }),
}));

export default useSectionStore;
