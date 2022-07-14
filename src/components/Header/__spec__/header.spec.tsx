import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

afterEach(() => {
  cleanup();
});

test("should render wrapper", () => {
  const setModalActive = jest.fn;
  render(<Header setModalActive={setModalActive} />);
  const headerElement = screen.getByTestId("header-wrapper");

  expect(headerElement).toBeInTheDocument();
});

test("should render loupe", () => {
  const setModalActive = jest.fn;
  render(<Header setModalActive={setModalActive} />);

  const headerElement = screen.getByTestId("header-loupe");
  expect(headerElement).toBeInTheDocument();
});
