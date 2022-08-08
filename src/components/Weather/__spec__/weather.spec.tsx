import React from "react";
import { render } from "@testing-library/react";
import { I18nProvider, LOCALES } from "../../../i18n";
import Weather from "../Weather";
import { mockNavigatorGeolocation } from "./mockNavigatorGeolocation";

describe("Weather", () => {
  const rejected = jest.fn();
  const { getCurrentPositionMock } = mockNavigatorGeolocation();

  describe("render tests", () => {
    it("should render weather-wrapper", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <Weather />
        </I18nProvider>
      );

      expect(getByTestId("weather-wrapper")).toBeInTheDocument();
    });
  });

  describe("render tests", () => {
    it.skip("should render weather-render-block", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <Weather />
        </I18nProvider>
      );

      expect(getByTestId("weather-render-block")).toBeInTheDocument();
    });
  });
});
