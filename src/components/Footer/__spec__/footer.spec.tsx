import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import ThemeContext from "../../ThemeContext/ThemeContext";

const setIsDarkThemeOff = jest.fn();

test("should render footer", () => {
  render(
    <ThemeContext.Provider value={{ isDarkThemeOff: true, setIsDarkThemeOff }}>
      <Footer />
    </ThemeContext.Provider>
  );
  const footerElement = screen.getByTestId("footer-wrapper");
  expect(footerElement).toBeInTheDocument();
});
