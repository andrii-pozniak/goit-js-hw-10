
const refs = {
    input: document.querySelector(`#search-box`),
    countryList: document.querySelector(`.country-list`),
    countryInfo: document.querySelector(`.country-info`)
}



function fetchCountries(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}
    `).then(response => {
        return response.json;
    });
};

fetchCountries(countryName)
.then().catch(error => {
    console.log(error)
});   

refs.input.addEventListener(`input`, _.debounce(onNameCountry), 300);

function onNameCountry() {
    
};
function callCountries() {
    
};
