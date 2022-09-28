import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../Weather/Weather.constant";
import "./CityWeather.css";

type Main = {
  temp: number;
};

type CityWeatherResponse = {
  main: Main;
  name: string;
};

type CityWeatherError = {
  response: any;
  message: string;
};

interface UseCityWeatherHookProps {
    city: string | undefined,
    setCity: React.Dispatch<React.SetStateAction<string | undefined>>,
    isEmpty: boolean,
    handleClick: () => Promise<void>,
    isLoading: boolean,
    error: CityWeatherError | null,
    data: CityWeatherResponse | null,
}

export const useCityWeather = (): UseCityWeatherHookProps => {
  const [data, setData] = useState<CityWeatherResponse | null>(null);
  const [city, setCity] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [error, setError] = useState<CityWeatherError | null>(null);
  
  const handleClick = async () => {
    if (isEmpty) {
      return;
    }
    setIsLoading(true);

    axios
      .get<CityWeatherResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setData(response.data);
        setCity("");
        setIsEmpty(true);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setCity("");
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!!city) {
      setIsEmpty(false);
    }
  }, [city]);

  return {
    city, setCity, isEmpty, handleClick, isLoading, error, data,
  }}