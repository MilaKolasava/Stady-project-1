import { createReducer, ActionType } from "typesafe-actions";
import { ACTION_STATUSES } from "../../shared/types";
import { getRepositoriesActions } from "./actions";

const initialState = {
  repositories: null,
  status: null,
  error: null,
};

const getRepositoriesRequestHandler = (initialState: any): any => ({
  ...initialState,
  status: ACTION_STATUSES.PENDING,
});

const getRepositoriesSuccessHandler = (
  initialState: any,
  { payload }: ActionType<typeof getRepositoriesActions.success>
) => ({
  ...initialState,
  repositories: payload.response,
  status: ACTION_STATUSES.FULFILLED,
});

const getRepositoriesFailureHandler = (
  initialState: any,
  { payload }: ActionType<typeof getRepositoriesActions.failure>
) => ({
  ...initialState,
  error: payload,
  status: ACTION_STATUSES.REJECTED,
  repositories: null,
});

export const repositoriesReducer = createReducer(initialState)
  .handleAction(getRepositoriesActions.request, getRepositoriesRequestHandler)
  .handleAction(getRepositoriesActions.success, getRepositoriesSuccessHandler)
  .handleAction(getRepositoriesActions.failure, getRepositoriesFailureHandler);
