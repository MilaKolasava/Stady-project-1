import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(() => false);
  const [isDarkThemeOff, setIsDarkThemeOff] = useState<boolean>(() => true);

  return (
    <>
      <Header
        setModalActive={setModalActive}
        setIsDarkThemeOff={setIsDarkThemeOff}
        isDarkThemeOff={isDarkThemeOff}
      />
      {modalActive && <ModalWindow setModalActive={setModalActive} />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Jumbotron />} />
      </Routes>
      <Footer
        setIsDarkThemeOff={setIsDarkThemeOff}
        isDarkThemeOff={isDarkThemeOff}
      />
    </>
  );
}

export default App;
