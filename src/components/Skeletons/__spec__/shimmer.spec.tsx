import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shimmer from "../Shimmer";

afterEach(() => {
  cleanup();
});

describe("Shimmer", () => {
  describe("render tests", () => {
    it("should render wrapper Shimmer component", () => {
      const { getByTestId } = render(<Shimmer />);

      expect(getByTestId("shimmer-wrapper")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render Shimmer component", () => {
      const { getByTestId } = render(<Shimmer />);

      expect(getByTestId("shimmer")).toBeVisible();
    });
  });
});
