import { createAsyncAction } from "typesafe-actions";

export const getRepositoriesActions = createAsyncAction(
  "GET_REPOSITORIES_REQUEST",
  "GET_REPOSITORIES_SUCCESS",
  "GET_REPOSITORIES_REJECT"
)<undefined, any, Error>();
