import { verificationError, renderingMarkup } from './service-function';

const API_URL = `https://restcountries.com/v2/name/`;

export function fetchCountries(country) {
  return fetch(
    `${API_URL}${country}?fields=name,capital,currencies,population,flags,languages`
  )
    .then(response => {
      return verificationError(response);
    })
    .then(data => {
      return renderingMarkup(data);
    })
    .catch(error => console.error(error));
}
