import React from "react";
import { cleanup, render } from "@testing-library/react";
import RepositoriesList from "../RepositoriesList";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

describe("RepositoriesList", () => {
  describe("render tests", () => {
    it("should render repositories list ", () => {
      const { getByTestId } = render(<RepositoriesList />);

      expect(getByTestId("repositories-list-items")).toBeInTheDocument();
    });
  });
});
