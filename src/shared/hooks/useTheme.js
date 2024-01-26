import { create } from 'zustand';

export const useTheme = create((set) => ({
  theme: 'light',
  setTheme: (/** @type {string} */ newTheme) => set({ theme: newTheme }),
}));
