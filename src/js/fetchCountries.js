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
    `).then(countries => {
       if ( countries.length > 10) {
        console.log(countries.length)
        Notiflix.Notify.success(` Too many matches found. Please enter a more specific name.`);
        
       } 
       return response.json();
    })
}; 

refs.input.addEventListener(`input`, debounce(onNameCountry, 300));

function onNameError(error) {
   Notiflix.Notify.failure(` Oops, there is no country with that name`);
   
}
function callCountry(countries) {
    console.log(countries.name)
//    const makeUp = countries.map((country) => {
//     return   `<div>  
    
//     <p>capital:${country.capital}</p>
//     <p>capital:${country.population}</p>
   
//    </div>`
   
//    }).join("")
//    refs.countryList.innerHTML = makeUp;
//    console.log(makeUp)
   
}