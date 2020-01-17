import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { weatherReducer } from "./reducers/weatherReducer";
import getWeather from "./sagas/getWeather";
const sagaMiddleware = createSagaMiddleware();


export const configureStore = () => {
  const initialState = {
    weather: {},
    isFetching: false,
    error: ""
  };
  const store = createStore(
    weatherReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  sagaMiddleware.run(getWeather);
  return store;
};
