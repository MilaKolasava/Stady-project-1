import { combineEpics } from 'redux-observable';
import { getRepositoriesEpic } from './repositories/epics';


export const rootEpic = combineEpics(getRepositoriesEpic);