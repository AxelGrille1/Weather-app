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
    region?: string;
    local_time?: string;
}

export type WeatherData = {
    day: WeatherData;
    date?: string;          // date for forecasted day
    temp_c: number;
    min_temp: number;
    max_temp: number;
    wind_kph: number;
    feelslike_c: number;
    condition: Condition;
    chance_of_rain: number;
    chance_of_snow: number;
    humidity: number;
    avgtemp_c: number;
    maxtemp_c: number;
    mintemp_c: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
}

export type Forecast = {
    current: WeatherData;
    forecastday: {
        date: Date;
        date_epoch: number;
        day: WeatherData[]};
}