import Notiflix from 'notiflix';
import API from "./api-service";
import getRefs from "./getRefs";
import cartCountry from "./cart";


const refs = getRefs()

let debounce = require('lodash.debounce');

function onNameCountry(e) {
    console.log(e.target.value)
  
    const nameCountries = e.target.value.trim();
        if (nameCountries === ''){
        refs.countryList.innerHTML = ``
        return;
       };
       
    API.fetchCountries(nameCountries)
    .then(callCountry)
    .catch(onNameError)    
}

refs.input.addEventListener(`input`, debounce(onNameCountry, 300));

function resetForm() {
    refs.countryList.innerHTML = ``;
    refs.input.value = '';
}

function onNameError(error) { 
    resetForm()
   Notiflix.Notify.failure(` Oops, there is no country with that name`);
  
  
}
function callCountry(countries) {   
    
    if (countries.length > 10) {
        Notiflix.Notify.success('Too many matches found. Please enter a more specific name.');
        refs.countryList.innerHTML = ``;
       
        return;
    };
    if (countries.length <= 1){
        console.log("ok")
        const makeCountry = countries.map(country => cartCountry(country)).join("  ");      
        return refs.countryList.innerHTML = makeCountry;
       
    };
//   console.log("10")
    const makeUp = countries.map((country) => {
        return   `<div class = "country_name">  
        <img class="image_country" src=${country.flags.svg}
        alt=${country.name.official}
        width="60" 
        />
        <p>${country.name.official}</p>   
       </div>`
      
           
        }).join("")
        refs.countryList.innerHTML = makeUp;
console.log(makeUp)

    
    // console.log("ok")
   

    
   }
   function countryCart(countries) {

    
   }
  
