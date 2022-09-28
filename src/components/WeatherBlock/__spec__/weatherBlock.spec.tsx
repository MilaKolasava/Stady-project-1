import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import WeatherBlock from "../WeatherBlock";

afterEach(() => {
  cleanup();
});

test("should render WeatherBlock component", () => {
  render(<WeatherBlock />);
  const weatherBlockElement = screen.getByTestId("weather-block");

  expect(weatherBlockElement).toBeInTheDocument();
});
