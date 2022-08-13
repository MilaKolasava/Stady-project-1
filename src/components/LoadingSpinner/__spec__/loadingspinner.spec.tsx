import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingSpinner from "../LoadingSpinner";

afterEach(() => {
  cleanup();
});

describe("LoadingSpinner", () => {
  describe("render tests", () => {
    it("should render spinner container", () => {
      const { getByTestId } = render(<LoadingSpinner />);

      expect(getByTestId("spinner-container")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render spinner", () => {
      const { getByTestId } = render(<LoadingSpinner />);

      expect(getByTestId("loading-spinner")).toBeVisible();
    });
  });
});
