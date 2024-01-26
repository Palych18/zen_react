import { create } from 'zustand';

export const useLang = create((set) => ({
  lang: 'en',
  setLang: (/** @type {string} */newLang) => set({ lang: newLang }),
}));
