import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/jquery/dist/jquery.min.js";
import "./../node_modules/popper.js/dist/umd/popper.min.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
