import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../Footer";

test("should render footer", () => {
  render(<Footer />);

  const footerElement = screen.getByTestId("footer-wrapper");
  expect(footerElement).toBeInTheDocument();
});
