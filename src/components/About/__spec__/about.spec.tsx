import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import About from "../About";

afterEach(() => {
  cleanup();
});

test("should render about component", () => {
  render(<About />);
  const aboutElement = screen.getByTestId("about-picture");

  expect(aboutElement).toBeInTheDocument();
});
