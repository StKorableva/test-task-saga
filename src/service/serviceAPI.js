import axios from 'axios';
const ID = 'f5eaa55feb2c10d251d92694304634b6';

export default function getWeather(city) {
  if(city === 'saint-petersburg') { //TODO: think about elegant way for few cities
    city = city.replace('-', ' '); 
  }
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},ru&APPID=${ID}`
  ).then(response => response.data)
}