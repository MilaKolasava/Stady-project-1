import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(() => false);

  return (
    <>
      <Header setModalActive={setModalActive} />
      {modalActive && <ModalWindow setModalActive={setModalActive} />}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Jumbotron />} />
      </Routes>
    </>
  );
}

export default App;
