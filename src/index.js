import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./scss/main.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Context from "./context/User";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
window.$name = "Gyanish";
root.render(
  <>
    <BrowserRouter>
      <Context>
        <Provider store={store}>
          <App />
        </Provider>
      </Context>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
