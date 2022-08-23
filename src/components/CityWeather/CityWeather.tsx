import axios from "axios";
import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { API_KEY } from "../Weather/Weather.constant";
import "./CityWeather.css";

type Main = {
  temp: number;
};

type CityWeatherResponse = {
  main: Main;
  name: string;
};

function CityWeather() {
  const [data, setData] = useState<CityWeatherResponse | null>(null);
  const [city, setCity] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const searchCity = (event: { key: string }) => {
    if (event.key === "Enter") {
      axios
        .get<CityWeatherResponse>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          setCity("");
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="cityweather-wrapper">
      <div className="cityweather-search">
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter City"
          onKeyPress={searchCity}
          type="text"
        />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data && (
          <div className="cityweather-container">
            <div className="cityweather-location">
              <b>{data && data.name}</b>
            </div>
            <div className="cityweather-tempepature">
              <h2>{data && data.main.temp}°C</h2>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CityWeather;
