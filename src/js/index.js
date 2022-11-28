import debounce from 'lodash.debounce';
import { verificationStartMarkup } from './service-function';

const DEBOUNCE_DELAY = 300;

export const inputEl = document.querySelector('#search-box');
export const nameCountryEl = document.querySelector('.country-list');
export const infoCountryEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearchForm, DEBOUNCE_DELAY));

function onSearchForm(event) {
  verificationStartMarkup(event)
}
