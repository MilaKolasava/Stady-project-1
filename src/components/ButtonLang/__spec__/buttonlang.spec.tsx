import React from "react";
import { render } from "@testing-library/react";
import ButtonLang from "../ButtonLang";
import "@testing-library/jest-dom";
import { I18nProvider, LOCALES } from "../../../i18n";

describe("ButtonLang", () => {
  const setLocale = jest.fn();

  describe("render tests", () => {
    it("should render button en", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ButtonLang setLocale={setLocale} locale={"ENGLISH"} />
        </I18nProvider>
      );

      expect(getByTestId("button-en")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render button by", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ButtonLang setLocale={setLocale} locale={"ENGLISH"} />
        </I18nProvider>
      );

      expect(getByTestId("button-by")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render button pl", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ButtonLang setLocale={setLocale} locale={"ENGLISH"} />
        </I18nProvider>
      );

      expect(getByTestId("button-pl")).toBeVisible();
    });
  });
});
