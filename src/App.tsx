import React, { useState } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [modalActive, setModalActive] = useState(() => false);
  return (
    <>
      <Header />
      <Jumbotron />
      <ModalWindow modalActive setModalActive />
    </>
  );
}

export default App;
