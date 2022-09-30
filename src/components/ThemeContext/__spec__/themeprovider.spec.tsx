import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeContext from "../ThemeContext";

describe("ThemeProvider", () => {
  const children = "theme";

  describe("render theme provider", () => {
    const setIsDarkThemeOff = jest.fn();
    const isDarkThemeOff = false;

    it("should render children", () => {
      const { getByText } = render(
        <ThemeContext.Provider value={{ isDarkThemeOff, setIsDarkThemeOff }}>
          {children}
        </ThemeContext.Provider>
      );

      expect(getByText("theme")).toContainHTML("<div>theme</div>");
    });
  });
});
