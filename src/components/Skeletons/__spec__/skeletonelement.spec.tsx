import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkeletonElement from "../SkeletonElement";

afterEach(() => {
  cleanup();
});

describe("SkeletonElement", () => {
  describe("render tests", () => {
    it("should render SkeletonElement component", () => {
      const { getByTestId } = render(<SkeletonElement type="title" />);

      expect(getByTestId("skeleton-element")).toBeVisible();
    });
  });
});
