import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Toggle from "../Toggle";
import "@testing-library/jest-dom";
import "jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

describe("Toggle", () => {
  describe("render tests", () => {
    it("should render wrapper toggle component", () => {
      const { getByTestId } = render(<Toggle />);

      expect(getByTestId("toggle-wrapper")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render dot toggle component", () => {
      const { getByTestId } = render(<Toggle />);

      expect(getByTestId("toggle-dot")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render switch toggle component", () => {
      const { getByTestId } = render(<Toggle />);

      expect(getByTestId("toggle-switch")).toBeVisible();
    });
  });

  describe("click handling test", () => {
    it("should execute onClick function when clicked", () => {
      const { getByTestId } = render(<Toggle />);
      expect(getByTestId("toggle-wrapper")).toHaveStyle(
        {background-color: 'black'}
      );
      fireEvent.click(screen.getByText(/DARK/i));
      expect(getByTestId("toggle-wrapper")).toHaveStyle(
        {background-color: 'white'}
      );
    });
  });
});
