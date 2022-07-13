import React, { useState } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [modalActive, setModalActive] = useState<boolean>(() => false);

  return (
    <>
      <Header setModalActive={setModalActive} />
      <Jumbotron />
      {modalActive && <ModalWindow setModalActive={setModalActive} />}
    </>
  );
}

export default App;
