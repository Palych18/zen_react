import { create } from 'zustand';

/**
 * @typedef {import('./types').LangState} LangState
 * @typedef {import('./types').LangStateCreator} Creator
 */

export const useLang = create(/** @type {Creator} */(set) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
}));
