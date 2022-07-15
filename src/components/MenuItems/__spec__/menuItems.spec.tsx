import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItems from "../MenuItems";
import { MENU_ITEMS } from "../../Header/Header.constant";

afterEach(() => {
  cleanup();
});

test("should render menuItems component", () => {
  render(<MenuItems items={MENU_ITEMS} />);
  const menuItemsElement = screen.getAllByTestId("menu-item");

  expect(menuItemsElement).toHaveLength(5);
});
