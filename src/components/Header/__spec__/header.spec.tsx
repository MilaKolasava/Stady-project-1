import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render wrapper", () => {
  const setModalActive = jest.fn;
  <BrowserRouter>
    render(
    <Header setModalActive={setModalActive} />
    ); const headerElement = screen.getByTestId("header-wrapper");
    expect(headerElement).toBeInTheDocument();
  </BrowserRouter>;
});

test("should render loupe", () => {
  const setModalActive = jest.fn;
  <BrowserRouter>
    render(
    <Header setModalActive={setModalActive} />
    ); const headerElement = screen.getByTestId("header-loupe");
    expect(headerElement).toBeInTheDocument();
  </BrowserRouter>;
});
