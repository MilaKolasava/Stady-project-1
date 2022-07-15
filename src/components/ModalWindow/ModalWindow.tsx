import React from "react";
import "./ModalWindow.css";

interface ModalWindowProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalWindow(props: ModalWindowProps) {
  return (
    <div className="modalWindow" data-testid="modal-window">
      <div
        className="modalContent"
        data-testid="modal-content"
        onClick={() => {
          props.setModalActive(false);
        }}
      />
    </div>
  );
}

export default ModalWindow;
