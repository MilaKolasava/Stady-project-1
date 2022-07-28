import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { I18nProvider, LOCALES } from "../../i18n";
import Provider from "../Provider";

describe("Provider", () => {
  const children = "main";

  describe("render provider", () => {
    it("should render children", () => {
      const { getByText } = render(
        <I18nProvider locale={LOCALES.ENGLISH}>
          <Provider children={children} locale={LOCALES.ENGLISH} />
        </I18nProvider>
      );

      expect(getByText("main")).toContainHTML("<div>main</div>");
    });
  });
});
