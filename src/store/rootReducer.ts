import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { repositoriesReducer } from "./repositories/reducer";

export const rootReducer = combineReducers({
    repositories: repositoriesReducer,
});

export type RootState = StateType<typeof rootReducer>;