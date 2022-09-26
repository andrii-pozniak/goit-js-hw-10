export default function cartCountry({capital, population, flags: 
    {svg}, languages, name:{official}}) {
        return `<div><div class = "country_name">  
                                 
        <img class="image_country" src=${svg}
         alt=${official}
         width="80" heighth="50"
         />
         <h2>Country: ${official}</h2>
         </div>
         <p><b>Capital:</b> ${capital}</p>  
         <p><b>Population: </b> ${population}</p> 
         <p><b>Languages: </b> ${Object.values(languages)}</p>
         </div>` ;
         
     
}