import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather() {
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#4fa94d"
    arialLabel="three-dots-loading"
    wrapperStyle={{ margin: "20px" }}
    wrapperClass="custom-loader"
    visible={true}
  />;

  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "54e0822b2d0f39d02a7d537obef382at";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          value={city}
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>

      {loaded && (
        <div>
          <img src={weather.icon} alt="Weather" />
          <div>{Math.round(weather.temperature)}°C</div>
          <div>Humidity: {weather.humidity}%</div>
          <div>Wind: {Math.round(weather.wind)} km/h</div>
        </div>
      )}
    </div>
  );
}
