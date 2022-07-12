import React from "react";
import "./ModalWindow.css";

function ModalWindow() {
  return (
    <div className="modalWindow" onClick={() => setModalActive(false)}>
      <div className="modalContent" />
    </div>
  );
}

export default ModalWindow;
