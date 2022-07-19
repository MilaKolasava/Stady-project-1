import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItems from "../MenuItems";
import { MENU_ITEMS } from "../../Header/Header.constant";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render menuItems component", () => {
  render(
    <BrowserRouter>
      <MenuItems items={MENU_ITEMS} />
    </BrowserRouter>
  );
  const menuItemsElement = screen.getAllByTestId("menu-item");
  expect(menuItemsElement).toHaveLength(2);
});
