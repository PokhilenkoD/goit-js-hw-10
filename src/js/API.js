import '../css/styles.css';
import {
  verificationError,
  renderingMarkup,
  errorNotFound,
} from './service-function';

const API_URL = `https://restcountries.com/v3.1/name/`;

export function fetchCountries(country) {
  return fetch(
    `${API_URL}${country}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return verificationError(response);
    })
    .then(data => {
      return renderingMarkup(data);
    })
    .catch(error => errorNotFound());
}
