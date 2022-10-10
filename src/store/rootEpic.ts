import { getRepositoriesEpic } from "./repositories/epic";
import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(getRepositoriesEpic);