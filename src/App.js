import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeatherView from "./components/WeatherView";
import { useParams } from "react-router-dom";

const App = () => {
  let { city } = useParams();
  const defaultCity = "saint-petersburg";

  return (
    <div className="App">
      <Header />
      <WeatherView city={city || defaultCity} />
    </div>
  );
};

export default App;
