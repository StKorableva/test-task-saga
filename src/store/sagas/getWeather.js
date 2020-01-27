import { call, put, takeLatest } from "redux-saga/effects";
import getWeatherApi from "../../service/serviceAPI";

export const weatherFetchingSuccess = weather => ({
  type: "WEATHER_FETCH_SUCCESS",
  weather
});

export const weatherIsFetching = () => ({
  type: "WEATHER_FETCH_START"
});

export const weatherHasError = error => ({
  type: "WEATHER_FETCH_ERROR",
  error
});

export const weatherFetchingRequest = city => ({
  type: 'WEATHER_FETCH_REQUEST',
  city
})

export function* fetchWeather(action) {
  try {
    yield put(weatherIsFetching());
    const weather = yield call(getWeatherApi,action.city);
    yield put(weatherFetchingSuccess(weather));
  } catch (error) {
    yield put(weatherHasError(error));
  }
}

function* getWeather() {
  yield takeLatest("WEATHER_FETCH_REQUEST", fetchWeather);
}

export default getWeather;
