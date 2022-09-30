import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import WeatherBlock from "./components/WeatherBlock/WeatherBlock";
import { I18nProvider, LOCALES } from "./i18n";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(() => false);
  const [locale, setLocale] = useState<string>(() => LOCALES.ENGLISH);

  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalActive]);

  return (
    <I18nProvider locale={locale}>
      <Header
        setModalActive={setModalActive}
        setLocale={setLocale}
        locale={locale}
      />
      <WeatherBlock />
      {modalActive && <ModalWindow setModalActive={setModalActive} />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Jumbotron />} />
      </Routes>
      <Footer />
    </I18nProvider>
  );
}

export default App;
