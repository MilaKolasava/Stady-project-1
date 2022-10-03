import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const initialState = {};
const store = createStore(
  rootReducer, 
  initialState, 
  composeEnhancers(applyMiddleware(epicMiddleware))
)                
epicMiddleware.run(rootEpic);


export default store;