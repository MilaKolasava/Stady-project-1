import { error } from "console";
import React, { useState } from "react";
import "./ModalWindow.css";
import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as Cross } from "../../assets/cross.svg";

interface ModalWindowProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalWindow(props: ModalWindowProps) {
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  //axios.get(https://api.github.com/users/MilaKolasava/repos);

  return (
    <div className="modalWindow" data-testid="modal-window">
      <div className="modalContent" data-testid="modal-content">
        <div className="modalCross">
          <Cross
            onClick={() => {
              props.setModalActive(false);
            }}
          />
        </div>
        <h2 className="modal-header">Repository List</h2>
        <ul>
          {["Repo1", "Repo2"].map((repo) => (
            <li
              className={selectedRepo === repo ? "selected" : ""}
              onClick={() => {
                setSelectedRepo(repo);
                document.title = repo;
              }}
            >
              {repo}
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default ModalWindow;
