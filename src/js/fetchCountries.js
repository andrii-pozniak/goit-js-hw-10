import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector(`#search-box`),
    countryList: document.querySelector(`.country-list`),
    countryInfo: document.querySelector(`.country-info`)
}

let debounce = require('lodash.debounce');

// fetchCountries('sweden')
// .then(callCountry)
// .catch(error => console.log(error))
function onNameCountry(e) {
    // const form = e.currentTarget;
    const name = refs.input.value;
    console.log(name)
    fetchCountries(name)
    .then(callCountry)
    .catch(error => console.log(error))    
}

function fetchCountries(name) {
return fetch(`https://restcountries.com/v3.1/name/${name}
    `).then(response => {
        return response.json;
    }) 
}; 

refs.input.addEventListener(`input`, debounce(onNameCountry, 150));



function callCountry(e) {
   
}