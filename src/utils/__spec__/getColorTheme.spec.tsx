import { cleanup } from "@testing-library/react";
import getColorTheme from "../getColorTheme";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

describe("getColorTheme", () => {
  it("should return dark string", () => {
    expect(getColorTheme(true)).toEqual("dark");
  });

  it("should return light string", () => {
    expect(getColorTheme(false)).toEqual("light");
  });
});
