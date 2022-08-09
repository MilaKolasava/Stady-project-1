import React from "react";
import { render, waitFor } from "@testing-library/react";
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
    it("should render weather-render-block", async () => {
      const geolocation = {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
          Promise.resolve(
            success({
              coords: {
                latitude: 51.1,
                longitude: 45.3,
              },
            })
          )
        ),
      };

      Object.defineProperty(global.navigator, "geolocation", {
        value: geolocation,
      });

      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <Weather />
        </I18nProvider>
      );

      await waitFor(() => {
        expect(getByTestId("weather-render-bldock")).toBeInTheDocument();
      });
    });
  });
});
