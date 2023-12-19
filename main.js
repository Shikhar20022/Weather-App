function getWeather() {
  const city = document.getElementById("cityInput").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c786e19e90fed4dee32c11ef6bb2f611`
  )
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      console.log(data);

      if (data.cod === "404") {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
      } else {
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        const infoHTML = `
          <p><strong>Weather:</strong> ${description}</p>
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
          <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        `;

        weatherInfo.innerHTML = infoHTML;
      }
    })
    .catch((error) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
    });
}
