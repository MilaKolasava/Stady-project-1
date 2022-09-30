import React from "react";
import { render, cleanup } from "@testing-library/react";
import WeatherBlock from "../WeatherBlock";
import { I18nProvider, LOCALES } from "../../../i18n";
import { mockNavigatorGeolocation } from "../../../utils-test/mockNavigatorGeolocation";

afterEach(() => {
  cleanup();
});

describe("WeatherBlock", () => {
  const { getCurrentPositionMock } = mockNavigatorGeolocation();

  describe("render tests", () => {
    it("should render weatherBlock component", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <WeatherBlock />
        </I18nProvider>
      );

      expect(getByTestId("weather-block")).toBeVisible();
    });
  });
});
