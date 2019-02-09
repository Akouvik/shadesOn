import React from "react";
import { createStore } from "redux";
import rootReducer from "../reducers/reducer.js";

export const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENTION_ && window._REDUX_DEVTOOLS_EXTENTION_()
);
