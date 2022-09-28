import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./CityWeather.css";
import { ReactComponent as Loupe } from "../../assets/loupe.svg";
import CityWeatherErrorView from "../CityWeatherErrorView/CityWeatherErrorView";
import { useIntl } from "react-intl";
import { useCityWeather } from "./useCityWeather.hook";

function CityWeather() {
  const intl = useIntl();
  const { city, setCity, isEmpty, handleClick, isLoading, error, data } =
    useCityWeather();

  return (
    <div className="cityweather-wrapper">
      <div className="cityweather-search">
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder={intl.formatMessage({ id: "enterCity" })}
          type="text"
        />
        <Loupe
          className={`cityweather-input-button ${
            !isEmpty ? "enabled" : "disabled"
          }`}
          onClick={handleClick}
        />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <CityWeatherErrorView error={error} />
      ) : (
        data && (
          <div className="cityweather-container">
            <div className="cityweather-location">
              <b>{data && data.name}</b>
            </div>
            <div className="cityweather-temperature">
              <h2>{data && data.main.temp.toFixed()}°C</h2>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CityWeather;
