import React, { useEffect, useState } from "react";
import { API_KEY } from "./Weather.constant";
import "./Weather.css";
import axios from "axios";
import { useIntl } from "react-intl";
import SkeletonWeather from "../Skeletons/SkeletonWeather";

type Main = {
  temp: number;
};

type Sys = {
  sunrise: number;
  sunset: number;
};

type WeatherResponse = {
  main: Main;
  sys: Sys;
  name: string;
};

function Weather() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [data, setData] = useState<WeatherResponse | null>(null);
  const intl = useIntl();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get<WeatherResponse>(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setData(response.data);
        });
    }
  }, [latitude, longitude]);

  return (
    <div className="weather-wrapper" data-testid="weather-wrapper">
      {data && (
        <div
          className="weather-render-block"
          data-testid="weather-render-block"
        >
          <div className="weather-header" data-testid="weather-header">
            <h2>{data.name}</h2>
          </div>
          <div className="weather-details" data-testid="weather-details">
            <p>
              <b>{intl.formatMessage({ id: "temperature" })}: </b>
              {data.main.temp}°C
            </p>
            <div className="weather-info-sun">
              <p>
                <b>{intl.formatMessage({ id: "sunrise" })}: </b>
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
              </p>
              <p>
                <b>{intl.formatMessage({ id: "sunset" })}: </b>
                {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      )}
      {!data && <SkeletonWeather />}
    </div>
  );
}

export default Weather;
