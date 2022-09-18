const BASE_URL = 'https://restcountries.com/v3.1'
function fetchCountries(countries) {
    return fetch(`${BASE_URL}/name/${countries}
        `).then(countries => {
           if ( countries.length > 10) {
            console.log(countries.length)
            Notiflix.Notify.success(` Too many matches found. Please enter a more specific name.`);
            return response.json();
           } 
        })
    }; 

    export default {fetchCountries}