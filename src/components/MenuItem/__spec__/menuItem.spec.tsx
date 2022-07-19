import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MenuItem from "../MenuItem";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render menuItem", () => {
  render(
    <BrowserRouter>
      <MenuItem title={""} path={""} />
    </BrowserRouter>
  );
  const menuItemElement = screen.getByTestId("menu-item");
  expect(menuItemElement).toBeInTheDocument();
});
