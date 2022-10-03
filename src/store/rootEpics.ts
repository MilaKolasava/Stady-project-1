import { combineEpics } from "redux-observable";
import { getRepositoriesEpic } from "./repositories/epic";

export const rootEpic = combineEpics(getRepositoriesEpic);
