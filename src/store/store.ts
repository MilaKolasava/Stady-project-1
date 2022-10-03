import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducer } from "./rootReducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpics";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

export default store;
