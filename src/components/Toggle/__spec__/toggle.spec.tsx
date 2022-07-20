import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Toggle from "../Toggle";

afterEach(() => {
  cleanup();
});

test("should render wrapper toggle component", () => {
  render(<Toggle />);

  const toggleElement = screen.getByTestId("toggle-wrapper");
  expect(toggleElement).toBeInTheDocument();
});

test("should render dot toggle component", () => {
  render(<Toggle />);

  const toggleElement = screen.getByTestId("toggle-dot");
  expect(toggleElement).toBeInTheDocument();
});

test("should render switch toggle component", () => {
  render(<Toggle />);

  const toggleElement = screen.getByTestId("toggle-switch");
  expect(toggleElement).toBeInTheDocument();
});
