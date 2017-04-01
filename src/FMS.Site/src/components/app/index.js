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
import Match from "../match/container";
import Matches from "../matches/container";
import Results from "../results/container";
import Season from "../season/container";
import TeamMatches from "../teamMatches/container";
import EndSeason from "../endSeason/container";
import * as UrlConstants from "../../constants/urlConstants";

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={UrlConstants.INDEX()} component={Page}>
                    <IndexRoute component={Home} />
                    <Route path={UrlConstants.TEAMS()} component={Teams}/>   
                    <Route path={UrlConstants.DIVISION({ id: ":id" })} component={Division}/>
                    <Route path={UrlConstants.TEAM({ id: ":id" })} component={Team}/>
                    <Route path={UrlConstants.TEAMMATCHES({ id: ":id" })} component={TeamMatches}/>
                    <Route path={UrlConstants.PLAYER({ id: ":id" })} component={Player}/>
                    <Route path={UrlConstants.PLAYERS()} component={Players}/>
                    <Route path={UrlConstants.SQUAD({ id: ":id" })} component={Squad}/>
                    <Route path={UrlConstants.MATCH({ id: ":id" })} component={Match}/>
                    <Route path={UrlConstants.FIXTURES()} component={Matches}/>
                    <Route path={UrlConstants.MATCHES({ id: ":id" })} component={Matches}/>
                    <Route path={UrlConstants.RESULTS({ id: ":id" })} component={Results}/>
                    <Route path={UrlConstants.SEASON()} component={Season}/>
                    <Route path={UrlConstants.ENDSEASON()} component={EndSeason}/>
                </Route>
                <Redirect from="/*" to="/" />
            </Router>
        );
    }
}

export default App;