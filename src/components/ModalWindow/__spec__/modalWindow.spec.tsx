import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ModalWindow from "../ModalWindow";

afterEach(() => {
  cleanup();
});

test("should render modalwindow", () => {
  const setModalActive = jest.fn;
  render(<ModalWindow setModalActive={setModalActive} />);
  const modalWindowElement = screen.getByTestId("modal-window");

  expect(modalWindowElement).toBeInTheDocument();
});

test("should render modalcontent", () => {
  const setModalActive = jest.fn;
  render(<ModalWindow setModalActive={setModalActive} />);
  const modalWindowElement = screen.getByTestId("modal-content");

  expect(modalWindowElement).toBeInTheDocument();
});
