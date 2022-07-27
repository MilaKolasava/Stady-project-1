import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItems from "../MenuItems";
import { MENU_ITEMS } from "../../Header/Header.constant";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider, LOCALES } from "../../../i18n";

afterEach(() => {
  cleanup();
});

test("should render menuItems component", () => {
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <MenuItems items={MENU_ITEMS} />
      </BrowserRouter>
    </I18nProvider>
  );
  const menuItemsElement = screen.getAllByTestId("menu-item");
  expect(menuItemsElement).toHaveLength(2);
});
