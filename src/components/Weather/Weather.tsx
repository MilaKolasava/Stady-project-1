import React, { useEffect, useState } from "react";
import { API_KEY } from "./Weather.constant";
import "./Weather.css";
import axios from "axios";

type DataResult = Array<Items>;

type Items = {
  name: string;
  temp: number;
  sunrise: number;
  sunset: number;
};

function Weather() {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [data, setData] = useState({});

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
        .get<DataResult>(
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
      <div className="weather-header">
        {data?.main.name ? <h2>{data?.main.name}</h2> : null}
      </div>
      <p>{data.main.temp}°C</p>
      <p>{data.sys.sunrise}</p>
      <p>{data.sys.sunset}</p>
    </div>
  );
}

export default Weather;
