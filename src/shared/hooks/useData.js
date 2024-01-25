import { create } from 'zustand';
import { API_BASE_URL } from '../config';

/**
 * @typedef {import('./types').DataStateCreator} Creator
 * @typedef {import('./types').DataState} DataState
 */

export const useData = create(/** @type {Creator} */(set) => ({
  data: null,
  getData: async (/** @type {string} */lang) => {
    const url = `${API_BASE_URL}/${lang}.json`;
    const responce = await fetch(url);
    const data = await responce.json();
    set((/** @type {DataState} */ state) => ({
      ...state,
      data,
    }));
  },
}));
