import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const logger = createLogger();
const saga = createSagaMiddleware();
let middlewares = [saga];
middlewares = [...middlewares, logger];

// const store = configureStore({ reducer: rootReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

saga.run(rootSaga);

export default store;
