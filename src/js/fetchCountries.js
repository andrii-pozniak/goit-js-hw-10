import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector(`#search-box`),
    countryList: document.querySelector(`.country-list`),
    countryInfo: document.querySelector(`.country-info`)
}

let debounce = require('lodash.debounce');


function onNameCountry() {
    // const form = e.currentTarget;
    const countries = refs.input.value;
    // console.log(countries)
    fetchCountries(countries)
    .then(callCountry)
    .catch(onNameError)    
}

function fetchCountries(countries) {
return fetch(`https://restcountries.com/v3.1/name/${countries}
    `).then(response => {
       if (response.status === 200) {
     
        return response.json;
       } else{
        Notiflix.Notify.failure(` Oops, there is no country with that name`);
       }
       
    })
}; 

refs.input.addEventListener(`input`, debounce(onNameCountry, 150));

function onNameError(error) {
   Notiflix.Notify.failure(` Oops, there is no country with that name`);
   
}

function callCountry(countries) {
   const makeUp = countries.map((country) => {
    return refs.countryList.innerHTML = `<li class="country_name">  <img class="country__image"
    src="${country.flag.svg}"
    
    alt="${country.name.official}"
    /><p>"${country.capital}"
    </p><p>"${country.population}"</p>
    <p>"${country.languages}"</p></li>`
   
   }).join("")

   refs.countryList.innerHTML = makeUp;
   console.log(makeUp)
   
}