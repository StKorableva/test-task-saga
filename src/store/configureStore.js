import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducers/weatherReducer";

export const configureStore = () => {
  const initialState = {
    weather: {},
    isFetching: false,
    error: ''
  };
  const store = createStore(
    weatherReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
