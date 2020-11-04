import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import reportWebVitals from "./reportWebVitals";
import { forbiddenwordsMiddleware } from "./redux/middlewere";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenwordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
