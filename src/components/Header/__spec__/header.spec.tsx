import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider, LOCALES } from "../../../i18n";

afterEach(() => {
  cleanup();
});

test("should render wrapper", () => {
  const setModalActive = jest.fn();
  const setIsDarkThemeOff = jest.fn();
  const isDarkThemeOff = false;

  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <Header
          setModalActive={setModalActive}
          setIsDarkThemeOff={setIsDarkThemeOff}
          isDarkThemeOff={isDarkThemeOff}
        />
      </BrowserRouter>
    </I18nProvider>
  );
  const headerElement = screen.getByTestId("header-wrapper");

  expect(headerElement).toBeInTheDocument();
});

test("should render loupe", () => {
  const setModalActive = jest.fn();
  const setIsDarkThemeOff = jest.fn();
  const isDarkThemeOff = false;

  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <Header
          setModalActive={setModalActive}
          setIsDarkThemeOff={setIsDarkThemeOff}
          isDarkThemeOff={isDarkThemeOff}
        />
      </BrowserRouter>
    </I18nProvider>
  );
  const headerElement = screen.getByTestId("header-loupe");
  expect(headerElement).toBeInTheDocument();
});
