import { create } from 'zustand';

/**
 * @typedef {import('./types').SliderOpenState} SliderOpenState
 * @typedef {import('./types').SliderOpenStateCreator} Creator
 */

export const useSlider = create(/** @type {Creator} */ (set) => ({
  isSliderOpen: false,
  setIsSliderOpen: (isOpen) => set({ isSliderOpen: isOpen }),
}));
