async function fetchWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "2611754fd382dcddf5cb0cf3b7a96584"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;


  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    document.getElementById("weatherBox").style.display = "block";
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to fetch weather data.");
  }
}
