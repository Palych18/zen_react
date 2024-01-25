import { create } from 'zustand';

export const useOpenOrder = create((set) => ({
  isOrderOpen: false,
  setIsOrderOpen: (/** @type {boolean} */ isOpen) => set({ isOrderOpen: isOpen }),
}));
