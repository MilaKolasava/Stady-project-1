import { ActionType, createReducer } from "typesafe-actions";
import { ACTION_STATUSES } from "../../components/shared/types";
import { getRepositoriesActions } from "./actions";
import { RepositoriesState } from "./types";

const initialState: RepositoriesState = {
    repositories: null,
    status: null,
    error: null
};
 
const getRepositoriesRequestHandler = (initialState: RepositoriesState): RepositoriesState => ({
    ...initialState,
    status: ACTION_STATUSES.PENDING,
});

const getRepositoriesSuccessHandler = (
    initialState: RepositoriesState,
    { payload }: ActionType<typeof getRepositoriesActions.success>
): RepositoriesState => ({
    ...initialState,
    repositories: payload.response,
    status: ACTION_STATUSES.FULFILLED,
});

const getRepositoriesFailureHandler = (
       { payload }: ActionType<typeof getRepositoriesActions.failure>
): RepositoriesState => ({
    error: payload,
    status: ACTION_STATUSES.REJECTED,
    repositories: null,
});

export const repositoriesReducer = createReducer(initialState)
.handleAction(getRepositoriesActions.request, getRepositoriesRequestHandler)
.handleAction(getRepositoriesActions.success, getRepositoriesSuccessHandler)
.handleAction(getRepositoriesActions.failure, getRepositoriesFailureHandler);