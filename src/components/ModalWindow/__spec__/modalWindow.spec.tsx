import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ModalWindow from "../ModalWindow";
import { I18nProvider, LOCALES } from "../../../i18n";

afterEach(() => {
  cleanup();
});

test("should render modalwindow", () => {
  const setModalActive = jest.fn;

  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <ModalWindow setModalActive={setModalActive} />
    </I18nProvider>
  );
  const modalWindowElement = screen.getByTestId("modal-window");

  expect(modalWindowElement).toBeInTheDocument();
});

test("should render modalcontent", () => {
  const setModalActive = jest.fn;
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <ModalWindow setModalActive={setModalActive} />
    </I18nProvider>
  );
  const modalWindowElement = screen.getByTestId("modal-content");

  expect(modalWindowElement).toBeInTheDocument();
});
