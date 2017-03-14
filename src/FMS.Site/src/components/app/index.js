import "./styles/app.scss";

import React, { Component } from "react";
import { Router, Redirect, IndexRoute, Route, browserHistory } from "react-router";

import Page from "../page/presentation";
import Home from "../home/presentation";

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Page}>
                    <IndexRoute component={Home} />
                </Route>
                <Redirect from="/*" to="/" />
            </Router>
        );
    }
}

export default App;