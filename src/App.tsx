import React, { useEffect, useState } from 'react';
import { WeatherApiResponse, fetchWeatherData } from './API';
import { Location } from './components/Weather';
import  InputField  from './components/InputField'
import "./App.css"

function App() {
  const [weather, setWeather] = useState<WeatherApiResponse | null>(null);
  const [city, setCity] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    fetchWeather(city);
    
  };


    const fetchWeather = async (cityName: string) => {
      const location: Location = { name: cityName};
      try {
        const data = await fetchWeatherData(location, 3); // Fetch for 3 days (current + 2 forecast days)
        console.log("API Response:", data); // Log the raw API response
        setWeather(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };



  return (
    <div className="App">
      <InputField city={city} setCity={setCity} handleAdd={handleAdd}/>

      {weather ? (
      <div>
      <h1>Weather in {weather?.location.name}</h1>
        <div className='weather__data'>
      {/* Current weather */}
        <div className='current'>
      <h2>Current temperature</h2>
      <p>Temperature: {weather.current.temp_c} °C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <p>Feels Like: {weather.current.feelslike_c} °C</p>
      <p>Wind: {weather.current.wind_kph} kph</p>
      <p>Humidity: {weather.current.humidity}%</p>
      </div>

      {/* Forecast for Next 2 Days */}
      <h2>Forecast</h2>
        <div className='forecast__container'>
      
      {weather.forecast.forecastday.slice(0, 2).map((day, index) => (
        <div key={index}>
          <h3>{day.date}</h3>
          <p>Average Temp: {day.day.avgtemp_c} °C</p>
          <p>Max Temp: {day.day.maxtemp_c} °C</p>
          <p>Min Temp: {day.day.mintemp_c} °C</p>
          <p>Condition: {day.day.condition.text}</p>
          <p>Chance of Rain: {day.day.daily_will_it_rain}%</p>
          <p>Chance of Snow: {day.day.daily_will_it_snow}%</p>
        </div>

      ))}
      </div>
              </div>

    </div>
    ) : (
      <p>Please enter a city to chek the weather.</p>
    )}
    </div>
  );
}

export default App;
