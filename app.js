const apiUrl = "https://dysobswbc2.execute-api.us-east-1.amazonaws.com/prod1/weather";

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        // Update the UI with weather data
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather();
