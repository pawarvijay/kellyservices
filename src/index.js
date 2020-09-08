import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/authentication";
import thunk from 'redux-thunk';

import App from "./App";

const vehicle = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
  )
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={vehicle}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
