import { create } from "zustand";

const useStore = create((set) => ({
  language: "English",
  setLanguage: (lang) => set({ language: lang }),
}));

export default useStore;
