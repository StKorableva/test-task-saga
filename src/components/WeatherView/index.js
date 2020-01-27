import { connect } from "react-redux";
import {weatherFetchingRequest} from "../../store/sagas/getWeather";
import WeatherView from "./WeatherView";
import selector from "../../selectors/weatherSelector";

const mapStateToProps = state => ({
  weather: selector(state),
  isFetching: state.isFetching,
  error: state.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWeather() {
    dispatch(weatherFetchingRequest(ownProps.city));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);
