import { create } from 'zustand';

/**
 * @typedef {import('./types').ThemeState} ThemeState
 * @typedef {import('./types').ThemeStateCreator} Creator
 */

export const useTheme = create(/** @type {Creator} */(set) => ({
  theme: 'light',
  toggleTheme: () => set((/** @type {ThemeState}*/ state) => {
    const theme = state.theme === 'light' ? 'dark' : 'light';
    return { theme };
  }),
}));
