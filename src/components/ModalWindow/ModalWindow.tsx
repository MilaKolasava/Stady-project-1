import { Console, error } from "console";
import React, { useState } from "react";
import "./ModalWindow.css";
import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as Cross } from "../../assets/cross.svg";

interface ModalWindowProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type searchResalt = Array<searchRepoType>;

type searchRepoType = {
  name: string;
  id: number;
  html_url: string;
};

function ModalWindow(props: ModalWindowProps) {
  const [selectedRepo, setSelectedRepo] = useState<searchRepoType | null>(null);
  const [repozitories, setRepozitories] = useState<searchRepoType[]>([]);

  useEffect(() => {
    if (selectedRepo) {
      document.title = selectedRepo.name;
    }
  }, [selectedRepo]);

  useEffect(() => {
    axios
      .get<searchResalt>("https://api.github.com/users/MilaKolasava/repos")
      .then((response) => {
        setRepozitories(response.data);
      });
  }, []);

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
        <ol>
          {repozitories.map((repo) => (
            <li
              key={repo.id}
              className={selectedRepo === repo ? "selected" : ""}
              onClick={() => {
                setSelectedRepo(repo);
              }}
            >
              {repo.name} <br />
              <a href={repo.html_url} target="_blank">
                {repo.html_url}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ModalWindow;
