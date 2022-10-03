import { ACTION_STATUSES } from '../../shared/types';
import { getRepositoriesActions } from './actions';
import { RepositoriesInitialState } from './types';
import { createReducer, ActionType } from 'typesafe-actions';


const initialState: RepositoriesInitialState = {
  repositories: null,
  status: null,
  error: null
}; 

const getRepositoriesRequestHandler = (state: RepositoriesInitialState): RepositoriesInitialState => ({
  ...state,
status: ACTION_STATUSES.PENDING
});

const getRepositoriesSuccessHandler = (state: RepositoriesInitialState,   { payload }: ActionType<typeof getRepositoriesActions.success>,
  ): RepositoriesInitialState => ({
  ...state,
    repossitories: payload,
status: ACTION_STATUSES.FULFILLED
});

const getRepositoriesFailureHandler = (state: RepositoriesInitialState,   { payload }: ActionType<typeof getRepositoriesActions.failure>,
  ): RepositoriesInitialState => ({
  ...state,
    error: payload,
status: ACTION_STATUSES.REJECTED
});


const repositoriesReducer = createReducer(initialState)
  .handleAction(getRepositoriesActions.request, getRepositoriesRequestHandler)
  .handleAction(getRepositoriesActions.success, getRepositoriesSuccessHandler)
  .handleAction(getRepositoriesActions.failure, getRepositoriesFailureHandler);

export default repositoriesReducer;