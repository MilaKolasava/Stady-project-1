import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItem from "../MenuItem";

afterEach(() => {
  cleanup();
});

test("should render menuItem", () => {
  render(<MenuItem item="string" />);
  const menuItemElement = screen.getByTestId("menu-item");

  expect(menuItemElement).toBeInTheDocument();
});
