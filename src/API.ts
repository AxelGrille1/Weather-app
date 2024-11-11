import { WEATHER_API_KEY } from "./credentials"
import { Location, Forecast, WeatherData, Condition } from "./components/Weather";



export type WeatherApiResponse = {
    location: Location,
    current: WeatherData,
    forecast: {
        forecastday: WeatherData[];
    };
    condition: Condition;
}

export const fetchWeatherData = async(city: Location, forecastDays: number): Promise<WeatherApiResponse> => {
    const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city.name}&days=${forecastDays}&aqi=no&alerts=no`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data as WeatherApiResponse;
};