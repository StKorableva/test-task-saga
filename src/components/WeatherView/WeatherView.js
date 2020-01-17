import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import "./WeatherView.scss";

class WeatherView extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.props.getWeather();
    }
  }

  transformToC = temp => {
    return (temp - 273.15).toFixed(1);
  };

  render() {
    const { city, isFetching, weather } = this.props;
    if (isFetching) {
      return <Spinner />;
    } else {
      return (
        <div className="main">
          <h1 className="main__logo">{city}</h1>
          <p className="main__temp">
            Temperature: {this.transformToC(weather.temp)} ℃
          </p>
        </div>
      );
    }
  }
}

export default WeatherView;
