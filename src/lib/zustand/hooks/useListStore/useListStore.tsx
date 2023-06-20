import { create } from "zustand";

interface ListStore {
  inViewListItem: string | null;
  setInViewListItem: (listItem: string | null) => void;
}

const useListStore = create<ListStore>((set) => ({
  inViewListItem: null,
  setInViewListItem: (listItem: string | null) =>
    set({ inViewListItem: listItem }),
}));

export default useListStore;
