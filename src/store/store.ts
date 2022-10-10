import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import { rootReducer } from "./rootReducer";

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const epicMiddleware = createEpicMiddleware();
const store = createStore(
    rootReducer, 
    {}, 
    composeEnhancer(applyMiddleware(epicMiddleware))
    );
    epicMiddleware.run(rootEpic);
    
export default store;