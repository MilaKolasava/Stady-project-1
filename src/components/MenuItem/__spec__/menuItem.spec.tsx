import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItem from "../MenuItem";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider, LOCALES } from "../../../i18n";

afterEach(() => {
  cleanup();
});

test("should render menuItem", () => {
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <MenuItem title={""} path={""} />
      </BrowserRouter>
    </I18nProvider>
  );
  const menuItemElement = screen.getByTestId("menu-item");
  expect(menuItemElement).toBeInTheDocument();
});
