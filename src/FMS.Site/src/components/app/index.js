import "./styles/app.scss";

import React, { Component } from "react";
import { Router, Redirect, IndexRoute, Route, browserHistory } from "react-router";

import Page from "../page/presentation";
import Home from "../home/presentation";
import Teams from "../teams/container";
import Team from "../team/container";
import Player from "../player/container";
import Players from "../players/container";
import Division from "../division/container";
import Squad from "../squad/container";

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Page}>
                    <IndexRoute component={Home} />
                    <Route path="/teams" component={Teams}/>   
                    <Route path="/division/:id" component={Division}/>
                    <Route path="/team/:id" component={Team}/>
                    <Route path="/player/:id" component={Player}/>
                    <Route path="/players" component={Players}/>
                    <Route path="/squad/:id" component={Squad}/>
                </Route>
                <Redirect from="/*" to="/" />
            </Router>
        );
    }
}

export default App;