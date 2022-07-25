import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../Footer";

const setIsDarkThemeOff = jest.fn();
const isDarkThemeOff = false;

test("should render footer", () => {
  render(
    <Footer
      setIsDarkThemeOff={setIsDarkThemeOff}
      isDarkThemeOff={isDarkThemeOff}
    />
  );

  const footerElement = screen.getByTestId("footer-wrapper");
  expect(footerElement).toBeInTheDocument();
});
