

import {getRepositoriesActions} from './actions';

import { Observable, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { RootAction } from '../actions';

export const getRepositoriesEpic: Epic<RootAction, RootAction> = action$ =>
  action$.pipe(
    filter(isActionOf(getRepositoriesActions.request)),
    mergeMap(
      (): Observable<RootAction> => {
        console.log('here1')
        return ajax({ url: 'https://api.github.com/users/MilaKolasava/repos', method: 'GET' }).pipe(
          map(payload => {
            console.log('here')
            return getRepositoriesActions.success(payload.response)
          }),
          catchError(error => of(getRepositoriesActions.failure(error.xhr.response))),
        )
      }
        ,
    ),
  );