import React from "react";
import { render } from "@testing-library/react";
import { I18nProvider, LOCALES } from "../../../i18n";
import CityWeatherErrorView from "../CityWeatherErrorView";
import { stringify } from "querystring";

describe("CityWeatherErrorView", () => {
  describe("render tests", () => {
    it("should render wrapper", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <CityWeatherErrorView
            error={{ response: { data: { message: "city not found" } } }}
          />
        </I18nProvider>
      );

      expect(getByTestId("cityweathererrorview-wrapper")).toBeInTheDocument();
    });
  });

  describe("render tests", () => {
    it("should render error text", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <CityWeatherErrorView
            error={{ response: { data: { message: "city not found" } } }}
          />
        </I18nProvider>
      );

      expect(getByTestId("cityweathererrorview-text")).toBeVisible();
    });
  });
});
