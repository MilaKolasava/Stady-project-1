import { getRepositoriesActions } from "./repositories/actions";
import { ActionType } from "typesafe-actions";

const actions = {
  getRepositoriesActions,
};

export type RootAction = ActionType<typeof actions>;
