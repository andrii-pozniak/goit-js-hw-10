import getRefs from "./getRefs";

const refs = getRefs()

const BASE_URL = 'https://restcountries.com/v3.1/name/'

function fetchCountries(countries) {
   
    return fetch(`${BASE_URL}${countries}
        `).then(response => {
            
           if ( response.status === 200 ) {
          
            return response.json();
           } 
           Notiflix.Notify.failure(` Oops, there is no country with that name`);

        })
    }; 

    export default {fetchCountries}