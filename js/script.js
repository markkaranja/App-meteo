const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");

const tempValue = document.querySelector("#temp-value");
const humidityVal = document.querySelector("#humidity-val");
const pressureVal = document.querySelector("#pressure-val");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const cityName = cityInput.value.trim();

    if (cityName === ""){
        return;
    } 

    cityInput.value = "";

    console.log(cityName)
})
 