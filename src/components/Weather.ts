/*export type Weather = {
    avg_temp: number;
    min_temp: number;
    max_temp: number;
    wind: number;
    feels_like: number;
    condition: Condition;
    chance_of_rain: number;
    chance_of_snow: number;
};*/

export type Condition = {
    text: string;
    icon: string;
    code: number;
}

export type Location = {
    name: string;
    region: string;
    local_time: string;
}

export type WeatherData = {
    date?: string;          // date for forecasted day
    avg_temp: number;
    min_temp: number;
    max_temp: number;
    wind: number;
    feels_like: number;
    condition: string;
    chance_of_rain: number;
    chance_of_snow: number;
}

export type Forecast = {
    current: WeatherData;
    forecast_day: WeatherData[],
}