import { cleanup } from "@testing-library/react";
import getActive from "../getActive";
import "@testing-library/jest-dom";
import { LOCALES } from "../../i18n";

afterEach(() => {
  cleanup();
});

describe("getActive", () => {
  it("should return class active", () => {
    const locale = "english";
    const LOCALES = "english";
    expect(getActive(locale, LOCALES)).toEqual("active");
  });

  it("should return class active", () => {
    const locale = "polish";
    const LOCALES = "english";
    expect(getActive(locale, LOCALES)).toEqual("");
  });
});
