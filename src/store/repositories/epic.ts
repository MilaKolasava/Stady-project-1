import { Epic } from "redux-observable"
import { of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { RootAction } from "../rootActions";
import { getRepositoriesActions} from "./actions";
import { ajax } from "rxjs/ajax";
import { Repository } from "./types";

export const getRepositoriesEpic: Epic<RootAction, RootAction> = (action$) =>
action$.pipe(
    filter(isActionOf(getRepositoriesActions.request)),
    mergeMap(() => {
        return ajax<Array<Repository>>({
            url: "https://api.github.com/users/MilaKolasava/repos",
            method: 'GET',
        }).pipe(
            map((repositories) => {
                return getRepositoriesActions.success(repositories);
            }),
            catchError((error) => of(getRepositoriesActions.failure(error)))
        );
    })
);


