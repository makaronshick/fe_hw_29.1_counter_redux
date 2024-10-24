"use strict";

import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterReduser from "./redux/reducers/counterReduser.js";
import App from "./App.js";

import "./styles.css";

const rootElement = document.getElementById("main");
const root = ReactDom.createRoot(rootElement);

const state = {
  counter: 0,
};
const store = createStore(CounterReduser, state);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
