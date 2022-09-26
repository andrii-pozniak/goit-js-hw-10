import axios from "axios";
import getRefs from "./getRefs";

const refs = getRefs()

const BASE_URL = 'https://restcountries.com/v3.1/name/'

async function fetchCountries(nameCountries) {

    
   
    const response = await axios.get(`${BASE_URL}${nameCountries}`);
    const countries =  response.data ;
    console.log(countries)
            if ( response.status === 200 ) {
            
             return countries;
            } 
            Notiflix.Notify.failure(` Oops, there is no country with that name`);
   
    }; 

    export default {fetchCountries}