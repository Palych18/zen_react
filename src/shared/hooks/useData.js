import { create } from 'zustand';
import { API_BASE_URL } from '../config';
import { partial } from '../utils';

/**
 * @typedef {import('./types').DataState} DataState
 * @typedef {import('./types').DataSetterCallback} SetterCallback
 * @typedef {import('./types').DataStateCreator} Creator
 */

/**
 * @function getData
 * @param {Function} set
 * @param {string} lang
 * @return {Promise<void>}
 */

const getData = async (set, lang) => {
  try {
    set(/** @type {SetterCallback} */(state) => ({
      ...state,
      isDataLoading: true,
      data: null,
      dataErrorMessage: '',
    }));

    const url = `${API_BASE_URL}/${lang}.json`;
    const responce = await fetch(url);
    const responceData = await responce.json();

    set(/** @type {SetterCallback} */(state) => ({
      ...state,
      isDataLoading: false,
      data: responceData,
      dataErrorMessage: '',
    }));
  } catch (error) {
    const /** @type {*} */ { message } = error;
    set(/** @type {SetterCallback} */(state) => ({
      ...state,
      isDataLoading: false,
      data: null,
      dataErrorMessage: message,
    }));
  }
};

export const useData = create(/** @type {Creator} */(set) => ({
  isDataLoading: false,
  data: null,
  dataErrorMessage: '',
  getData: partial(getData, set),
}));
