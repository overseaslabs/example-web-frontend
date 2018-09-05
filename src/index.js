import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import "assets/scss/material-dashboard-react.scss";
import store from "./store";
import Dashboard from "./layouts/Dashboard.jsx";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path={"/"} component={Dashboard}/>;
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
