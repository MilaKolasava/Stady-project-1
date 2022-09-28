import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
const store = createStore(
  rootReducer, 
  initialState, 
  composeEnhancers(applyMiddleware())
  )                

export default store;