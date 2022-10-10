import { createAsyncAction } from "typesafe-actions";
import { Response } from "./types";

export const getRepositoriesActions = createAsyncAction(
    'GET_REPOSITORIES_REQEST',
    'GET_REPOSITORIES_SUCCESS', 
    'GET_REPOSITORIES_REJECT'
)<undefined, Response, Error>();