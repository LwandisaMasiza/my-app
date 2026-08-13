import React, {useState} from "react";
import axios from "axios";

export default function weatherSearch() {

    const [city, setCity] = useState("");
    const [loaded, setLoaded]= useState(false);
    const [weather, setWeather]= useState({});

    function displayWeather(response) {
        setLoader(true);
        setWeather({temperature: response.data.main.temperature,
                    wind: response.data.wind.speed,
                    humidity: response.data.main.humidity,
                    icon: "http://openweathermap.org/img/wn/${response.data.weather[0].icon}02x.png}",
                description: response.data.weather[0].description});}

       function handleSubmit(event) {
        event.preventDefault ();
        let apiKey="54e0822b2d0f39d02a7d537obef382at";
        let apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${apikey}unit merit';
        axios.get(apiUrl).then(displayWeather);
    }
    
     function updateCity(event) {
        setCity(event.target.value);
    }

        let form = (<form onSubmit={handleSubmit}>
    <input type="Search" placeholder="Enter a city..." onChange={updateCity}/>
    <button type="Submit">Search</button>
</form>);

if (loaded){ return (<div>
     {form} <ul>
    <li>Temperature:{math.round(weather.temperature)}</li>
    <li>Description: {weather.description}C</li>
    <li>Humidity: {weather.humidity}%</li>
    <li>Wind: {weather.wind}km/h</li>
    <li><img src={weather.icon}alt="weather Icon"/></li>
</ul>
</div>);}
{else return form;}}

