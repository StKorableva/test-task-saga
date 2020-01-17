import axios from 'axios';
import {CITY_ID, CITY_FULL_NAME} from '../constants/cityConstants';
const KEY = 'f5eaa55feb2c10d251d92694304634b6';

export default function getWeather(city) {
  const cityId = (city === CITY_FULL_NAME.petersburg) ? CITY_ID.petersburg :
  (city === CITY_FULL_NAME.moscow) ? CITY_ID.moscow : 
  (city === CITY_FULL_NAME.rostov) ? CITY_ID.rostov : null;

  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${KEY}`
  ).then(response => response.data)
}