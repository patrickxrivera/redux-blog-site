import axios from 'axios';

const API_KEY = 'e7819a0645bb3723fbfe223ad074c870';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
