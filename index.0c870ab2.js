!function(){var n={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};(function(n){return fetch("https://restcountries.com/v3.1/name/".concat(n,"\n    ")).then((function(n){return n.json}))})(countryName).then().catch((function(n){console.log(n)})),n.input.addEventListener("input",_.debounce((function(){})),300)}();
//# sourceMappingURL=index.0c870ab2.js.map
