import { combineReducers } from 'redux';
import repositoriesReducer from './repositories/reducer'

export const rootReducer =  combineReducers({repositories: repositoriesReducer,})