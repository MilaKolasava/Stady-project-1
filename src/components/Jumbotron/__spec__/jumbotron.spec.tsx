import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Jumbotron from "../Jumbotron";

afterEach(() => {
  cleanup();
});

test("should render jumbotron component", () => {
  render(<Jumbotron />);
  const jumbotronElement = screen.getByTestId("jumbotron-picture");

  expect(jumbotronElement).toBeInTheDocument();
});
