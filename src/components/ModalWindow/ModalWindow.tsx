import React, { useState } from "react";
import "./ModalWindow.css";
import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { useIntl } from "react-intl";

interface ModalWindowProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type SearchResult = Array<Repository>;

type Repository = {
  name: string;
  id: number;
  html_url: string;
};

function ModalWindow(props: ModalWindowProps) {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const intl = useIntl();

  useEffect(() => {
    if (selectedRepo) {
      document.title = selectedRepo.name;
    }
  }, [selectedRepo]);

  useEffect(() => {
    axios
      .get<SearchResult>("https://api.github.com/users/MilaKolasava/repos")
      .then((response) => {
        setRepositories(response.data);
      });
  }, []);

  return (
    <div className="modalWindow" data-testid="modal-window">
      <div className="modalContent" data-testid="modal-content">
        <div className="modal-header-wrapper">
          <div className="modal-header">
            <Cross
              className="modalCross"
              onClick={() => {
                props.setModalActive(false);
              }}
            />
            <h2 className="modal-header">
              {" "}
              {intl.formatMessage({ id: "repositoryList" })}
            </h2>
          </div>
        </div>

        <ol>
          {repositories.map((repo) => (
            <li
              key={repo.id}
              className={selectedRepo === repo ? "selected" : ""}
              onClick={() => {
                setSelectedRepo(repo);
              }}
            >
              <b>{repo.name}</b> <br />
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
