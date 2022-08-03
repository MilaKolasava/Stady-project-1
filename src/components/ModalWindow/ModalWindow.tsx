import React from "react";
import "./ModalWindow.css";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { useIntl } from "react-intl";
import ModalList from "../ModalList/ModalList";

interface ModalWindowProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalWindow(props: ModalWindowProps) {
  const intl = useIntl();

  return (
    <div className="modalWindow" data-testid="modal-window">
      <div className="modalContent" data-testid="modal-content">
        <div className="modal-header-wrapper" data-testid="modal-wrapper">
          <div className="modal-header" data-testid="modal-header">
            <Cross
              data-testid="closed-icon"
              className="modalCross"
              onClick={() => {
                props.setModalActive(false);
              }}
            />
            <h2 className="modal-header">
              {intl.formatMessage({ id: "repositoryList" })}
            </h2>
          </div>
        </div>
        <ModalList />
      </div>
    </div>
  );
}

export default ModalWindow;
