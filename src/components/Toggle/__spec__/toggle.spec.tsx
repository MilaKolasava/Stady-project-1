import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Toggle from "../Toggle";
import "@testing-library/jest-dom";
import { I18nProvider, LOCALES } from "../../../i18n";
import ThemeContext from "../../ThemeContext/ThemeContext";

afterEach(() => {
  cleanup();
});

describe("Toggle", () => {
  const setIsDarkThemeOff = jest.fn();

  describe("render tests", () => {
    it("should render wrapper toggle component", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ThemeContext.Provider
            value={{ isDarkThemeOff: false, setIsDarkThemeOff }}
          >
            <Toggle />
          </ThemeContext.Provider>
        </I18nProvider>
      );

      expect(getByTestId("toggle-wrapper")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render dot toggle component", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ThemeContext.Provider
            value={{ isDarkThemeOff: false, setIsDarkThemeOff }}
          >
            <Toggle />
          </ThemeContext.Provider>
        </I18nProvider>
      );

      expect(getByTestId("toggle-dot")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render switch toggle component", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ThemeContext.Provider
            value={{ isDarkThemeOff: false, setIsDarkThemeOff }}
          >
            <Toggle />
          </ThemeContext.Provider>
        </I18nProvider>
      );

      expect(getByTestId("toggle-switch")).toBeVisible();
    });
  });

  describe("click handling test", () => {
    it("should execute onClick function when clicked", () => {
      const { getByTestId } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <ThemeContext.Provider
            value={{ isDarkThemeOff: true, setIsDarkThemeOff }}
          >
            <Toggle />
          </ThemeContext.Provider>
        </I18nProvider>
      );

      fireEvent.click(screen.getByText(/DARK/i));

      expect(setIsDarkThemeOff).toBeCalled();
      expect(setIsDarkThemeOff).toBeCalledWith(false);
    });
  });
});
