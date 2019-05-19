import "normalize.css";
import React, {createContext} from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { App } from "./componenets/App";
import "./index.scss";
import { reducer } from "./redux-hooks/store";
import * as serviceWorker from "./serviceWorker";

export const ReduxStoreContext = createContext(null);
const store = createStore(reducer);
ReactDOM.render(
    // @ts-ignore
    <ReduxStoreContext.Provider value={store}>
    <App />
    </ReduxStoreContext.Provider>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
