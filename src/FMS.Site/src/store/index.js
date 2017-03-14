import { applyMiddleware, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

let store = createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger())
);

export default store;