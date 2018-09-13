import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import "assets/scss/material-dashboard-react.scss";
import store from "./store";
import DashboardContainer from "./layouts/DashboardContainer";
import WebSocket from "./services/WebSocket";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path={"/"} component={DashboardContainer}/>;
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);

const ws = new WebSocket("/ws", store);
ws.connect();