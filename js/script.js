const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");

const tempElement = document.querySelector("#temp-value");
const humidityElement = document.querySelector("#humidity-value");
const pressureElement = document.querySelector("#pressure-value");
const windElement = document.querySelector("#wind-value");

// La clé API (pour des mesures de sécurité l'ancienne clé a été désactivé)

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const cityName = cityInput.value.trim();

    if (cityName === ""){
        return;
    } 

    cityInput.value = "";
    try{
        const data = await getWeatherData(cityName);
        displayWeatherInfo(data);
    } catch(error){
        alert(error.message)
    }


})

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=fr`
    const reponse = await fetch(apiUrl)

    if (reponse.status === 401) {
        throw new Error("Clé API non active pour le moment (Code 401)");
    }
    if(!reponse.ok){
        // Envoie un message d'erreur si ils ne trouve pas la ville
        throw new Error("Ville non trouvé")
    }

    return await reponse.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: {temp, humidity, pressure,} , wind : {speed} } = data;

    if (tempElement) tempElement.textContent = `${Math.round(temp)}°C`;
    if (humidityElement) humidityElement.textContent = `${humidity}%`;
    if (pressureElement) pressureElement.textContent = `${pressure} hPa`;
    if (windElement) windElement.textContent = `${Math.round(speed * 3.6)} km/h`;
}

 