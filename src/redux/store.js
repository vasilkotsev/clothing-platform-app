import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger]; //array with all middlewares added to Store;

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
