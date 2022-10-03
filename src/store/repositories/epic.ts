import { Epic } from "redux-observable";
import { RootAction } from "../rootActions";
import { filter, mergeMap, map, catchError } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { getRepositoriesActions } from "./actions";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";

export const getRepositoriesEpic: Epic<RootAction, RootAction> = (action$) =>
  action$.pipe(
    filter(isActionOf(getRepositoriesActions.request)),
    mergeMap(() => {
      return ajax({
        url: "https://api.github.com/users/MilaKolasava/repos",
        method: "GET",
      }).pipe(
        map((repositories) => {
          return getRepositoriesActions.success(repositories);
        }),
        catchError((error) => of(getRepositoriesActions.failure(error)))
      );
    })
  );
