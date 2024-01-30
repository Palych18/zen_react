import { create } from 'zustand';

/**
 * @typedef {import('./types').OrderOpenState} OrderOpenState
 * @typedef {import('./types').OrderOpenStateCreator} Creator
 */

export const useOpenOrder = create(/** @type {Creator} */ (set) => ({
  isOrderOpen: false,
  setIsOrderOpen: (isOpen) => set({ isOrderOpen: isOpen }),
}));
