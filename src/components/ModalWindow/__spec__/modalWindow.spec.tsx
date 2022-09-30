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

test("should render modal wrapper for header", () => {
  const setModalActive = jest.fn;
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <ModalWindow setModalActive={setModalActive} />
    </I18nProvider>
  );
  const modalWindowElement = screen.getByTestId("modal-wrapper");

  expect(modalWindowElement).toBeInTheDocument();
});

test("should render modal header for wrapper", () => {
  const setModalActive = jest.fn;
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <ModalWindow setModalActive={setModalActive} />
    </I18nProvider>
  );
  const modalWindowElement = screen.getByTestId("modal-header");

  expect(modalWindowElement).toBeInTheDocument();
});

test("should render closed icon", () => {
  const setModalActive = jest.fn;
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <ModalWindow setModalActive={setModalActive} />
    </I18nProvider>
  );
  const modalWindowElement = screen.getByTestId("closed-icon");

  expect(modalWindowElement).toBeVisible();
});

test("should render caption", () => {
  const setModalActive = jest.fn;
  render(
    <I18nProvider locale={LOCALES.ENGLISH}>
      <ModalWindow setModalActive={setModalActive} />
    </I18nProvider>
  );
  const modalWindowElement = screen.getByText("Repositories list");

  expect(modalWindowElement).toContainHTML(
    "<h2 class='modal-header'>Repositories list</h2>"
  );
});
