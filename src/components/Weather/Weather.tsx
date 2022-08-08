import React, { useEffect, useState } from "react";
import { API_KEY } from "./Weather.constant";
import "./Weather.css";
import axios from "axios";

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
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [data, setData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is:", lat);
      console.log("Longitude is:", long);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  useEffect(() => {
    if (lat && long) {
      axios
        .get<WeatherResponse>(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    }
  }, [lat, long]);

  return (
    <div className="weather-wrapper">
      {data && (
        <div className="weather-header">
          <h2>{data.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Weather;
