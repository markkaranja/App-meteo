const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");

const tempValue = document.querySelector("#temp-value");
const humidityVal = document.querySelector("#humidity-val");
const pressureVal = document.querySelector("#pressure-val");

const apiKey = "9e0a490997384b95986bb811ed3615db";

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const cityName = cityInput.value.trim();

    if (cityName === ""){
        return;
    } 

    cityInput.value = "";

    const data = await getWeatherData(cityName);

    displayWeatherInfo(data);
})

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
    const reponse = await fetch(apiUrl)

    if(!reponse.ok){
        // Envoie un message d'erreur si ils ne trouve pas la ville
        throw new Error("Ville non trouvé")
    }

    return await reponse.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { temp: tempValue, humidity: humidityVal } } = data;

    console.log(city, tempValue, humidityVal);
}

 