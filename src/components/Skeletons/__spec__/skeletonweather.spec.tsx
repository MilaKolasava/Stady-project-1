import React from "react";
import { render, cleanup } from "@testing-library/react";
import SkeletonWeather from "../SkeletonWeather";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

describe("SkeletonWeather", () => {
  describe("render tests", () => {
    it("should render wrapper SkeletonWeather component", () => {
      const { getByTestId } = render(<SkeletonWeather />);

      expect(getByTestId("skeleton-wrapper")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render skeleton-weather SkeletonWeather component", () => {
      const { getByTestId } = render(<SkeletonWeather />);

      expect(getByTestId("skeleton-weather")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render header SkeletonWeather component", () => {
      const { getByTestId } = render(<SkeletonWeather />);

      expect(getByTestId("skeleton-header")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render blok1 SkeletonWeather component", () => {
      const { getByTestId } = render(<SkeletonWeather />);

      expect(getByTestId("skeleton-block1")).toBeVisible();
    });
  });

  describe("render tests", () => {
    it("should render blok2 SkeletonWeather component", () => {
      const { getByTestId } = render(<SkeletonWeather />);

      expect(getByTestId("skeleton-block2")).toBeVisible();
    });
  });
});
