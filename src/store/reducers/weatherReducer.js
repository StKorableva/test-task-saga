const INITIAL_STATE = { isFetching: false, weather: {}, error: '' };

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "WEATHER_FETCH_SUCCESS":
      return { ...state, weather: action.weather, error: '' , isFetching: false};
    case "WEATHER_FETCH_START":
      return { ...state, isFetching: true };
    case "WEATHER_FETCH_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
