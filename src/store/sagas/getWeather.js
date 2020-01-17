import { call, put, takeLatest } from "redux-saga/effects";
import getWeatherApi from "../../service/serviceAPI";

const setWeather = weather => ({
  type: "SET_WEATHER",
  weather
});

const startFetching = () => ({
  type: "START_FETCHING"
});

const resetFetching = () => ({
  type: "RESET_FETCHING"
});

const setError = error => ({
  type: "SET_ERROR",
  error
});

export const fetchWeatherRequest = city => ({
  type: 'FETCH_WEATHER',
  payload: city
})

function* fetchWeather(action) {
  try {
    yield put(startFetching());
    const weather = yield call(getWeatherApi, action.payload);
    yield put(setWeather(weather));
    yield put(resetFetching());
  } catch (error) {
    yield put(setError(error));
  }
}

function* getWeather() {
  yield takeLatest("FETCH_WEATHER", fetchWeather);
}

export default getWeather;
