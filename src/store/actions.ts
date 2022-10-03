

import { ActionType } from 'typesafe-actions';
import { getRepositoriesActions } from './repositories/actions';

const actions = {
  getRepositoriesActions
};

export type RootAction = ActionType<typeof actions>;