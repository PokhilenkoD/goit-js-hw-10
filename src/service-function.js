import { nameCountryEl, infoCountryEl } from './index';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './API';

export function verificationError(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export function renderingMarkup(data) {
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name');
  } else if (data.length > 2) {
    data.map(obj => {
      infoCountryEl.innerHTML = ``;
      nameCountryEl.innerHTML = `<li><img src="${obj.flags.png}" alt="" height="15px" width="20px"/></li><li>${obj.name}</li>`;
    });
  } else if (data.length < 2) {
    data.map(obj => {
      nameCountryEl.innerHTML = `<li><img src="${obj.flags.png}" alt="" height="15px" width="20px"/></li><li>${obj.name}</li>`;
      infoCountryEl.innerHTML = `<ul>
      <li><span>Capital:</span> ${obj.capital}</li>
      <li><span>Population:</span> ${obj.population}</li>
      <li><span>Languages:</span> ${obj.languages[0].name}</li>
    </ul>`;
    });
  }
}

export function verificationStartMarkup(event) {
  if (!event.target.value) {
    nameCountryEl.innerHTML = ``;
    infoCountryEl.innerHTML = ``;
    return Notify.warning('Enter country name');
  }
  fetchCountries(event.target.value.trim());
}

export function errorNotFound() {
    Notify.failure('Oops, there is no country with that name');
}