import { WEATHER_API_KEY } from "./credentials"
import { Location, Forecast, WeatherData} from "./components/Weather";



export type WeatherApiResponse = {
    location: Location,
    current: WeatherData,
    forecast: WeatherData,
}

export const fetchWeatherData = async(city: Location, forecast: Forecast): Promise<WeatherApiResponse> => {
    const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${Location.name}&days=${forecast}&aqi=yes&alerts=no`;
    const data = await(await fetch(endpoint)).json();
    return data
}