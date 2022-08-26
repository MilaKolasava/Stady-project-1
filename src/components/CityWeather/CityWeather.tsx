import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { API_KEY } from "../Weather/Weather.constant";
import "./CityWeather.css";
import { ReactComponent as Loupa } from "../../assets/loupe.svg";

type Main = {
  temp: number;
};

type CityWeatherResponse = {
  main: Main;
  name: string;
};

type CityWeatherError = {
  message: string;
};

function CityWeather() {
  const [data, setData] = useState<CityWeatherResponse | null>(null);
  const [city, setCity] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<CityWeatherError | null>(null);
  const handleClick = async () => {
    setIsLoading(true);

    useEffect(() => {
      axios
        .get<CityWeatherResponse>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          setCity("");
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
        }),
        [];
    });
  };
  return (
    <div className="cityweather-wrapper">
      <div className="cityweather-search">
        <input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter City"
          type="text"
        />
        <Loupa
          className="cityweather-input-button"
          onClick={() => {
            handleClick;
          }}
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
