import { createSelector } from "reselect";

// TODO: use tranform in component
const weatherSelector = state => state.weather;

const selectWeather = weather => {
  if (!weather.name) {
    return {
      city: "",
      temp: ""
    };
  }
  return {
    city: weather.name,
    temp: weather.main.temp
  };
};

export default createSelector(weatherSelector, selectWeather);
