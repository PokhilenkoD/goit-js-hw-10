import '../css/styles.css';
import {
  verificationError,
  renderingMarkup,
  errorNotFound,
} from './service-function';

const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});
const API_URL = `https://restcountries.com/v3.1/name/`;

export function fetchCountries(country) {
  return fetch(
    `${API_URL}${country}?${searchParams}`
  )
    .then(response => {
      return verificationError(response);
    })
    .then(data => {
      return renderingMarkup(data);
    })
    .catch(error => errorNotFound());
}
