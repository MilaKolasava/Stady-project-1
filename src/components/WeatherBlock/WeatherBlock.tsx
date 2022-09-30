import React from "react";
import CityWeather from "../CityWeather/CityWeather";
import Weather from "../Weather/Weather";
import "./WeatherBlock.css";

function WeatherBlock() {
  return (
    <div className="weather-block" data-testid="weather-block">
      <CityWeather />
      <Weather />
    </div>
  );
}

export default WeatherBlock;
