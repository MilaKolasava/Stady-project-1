import axios from "axios";
import React, { useState } from "react";
import { API_KEY } from "../Weather/Weather.constant";
import "./CityWeather.css";

function CityWeather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&callback=test&appid=${API_KEY}`;

  const searchLocation = (event: { key: string }) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="cityweather-wrapper">
      <div className="cityweather-search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="cityweather-container">
        <div className="cityweather-location">Warsaw</div>
        <div className="cityweather-tempepature">
          <h2>30°C</h2>
        </div>
      </div>
    </div>
  );
}

export default CityWeather;
