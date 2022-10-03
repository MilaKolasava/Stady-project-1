import React, { useEffect, useState } from "react";
import "./ModalWindow.css";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { useIntl } from "react-intl";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import axios from "axios";
import { getRepositoriesActions } from '../../store/repositories/actions';
import { useDispatch } from 'react-redux';

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
  const intl = useIntl();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositoriesActions.request())
  }, [dispatch])

  useEffect(() => {
    axios
      .get<SearchResult>("https://api.github.com/users/MilaKolasava/repos")
      .then((response) => {
        setRepositories(response.data);
        setIsLoading(false);
      });
  }, []);

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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <RepositoriesList
            setIsLoading={setIsLoading}
            repositories={repositories}
          />
        )}
      </div>
    </div>
  );
}

export default ModalWindow;

