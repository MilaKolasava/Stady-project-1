import React, { useEffect } from "react";
import "./ModalWindow.css";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import { useIntl } from "react-intl";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { getRepositoriesActions } from "../../store/repositories/actions";
import { ACTION_STATUSES } from "../shared/types";
import { RootState } from "../../store/rootReducer";
import { ModalWindowProps, Repository } from "../../store/repositories/types";

function ModalWindow(props: ModalWindowProps) {
  const isLoadingUseSelector = useSelector(
    // @ts-ignore
    (state: RootState) => state.repositories.status
  );
  const intl = useIntl();
  const isLoading =
    isLoadingUseSelector !== ACTION_STATUSES.FULFILLED ||
    isLoadingUseSelector === null;
  const repositories = useSelector(
    // @ts-ignore
    (state: RootState) => state.repositories.repositories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositoriesActions.request());
  }, [dispatch]);

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
            isLoading={isLoading}
            repositories={repositories as unknown as Repository[]}
          />
        )}
      </div>
    </div>
  );
}

export default ModalWindow;
