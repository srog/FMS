﻿import { combineReducers } from "redux";
import Teams from "./teams_reducer";
import SelectTeam from "./selectTeam_reducer";
import Team from "./team_reducer";
import Player from "./player_reducer";
import Players from "./players_reducer";
import Division from "./division_reducer";
import Match from "./match_reducer";
import Matches from "./matches_reducer";
import TeamMatches from "./teamMatches_reducer";
import MatchEvents from "./matchEvents_reducer";
import Results from "./results_reducer";
import Season from "./season_reducer";
import EndSeason from "./endSeason_reducer";
import News from "./news_reducer";

const rootReducer = combineReducers({
    teams: Teams,
    selectTeam: SelectTeam,
    team: Team,
    division: Division,
    player: Player,
    players: Players,
    match: Match,
    matches: Matches,
    teamMatches: TeamMatches,
    matchEvents: MatchEvents,
    results: Results,
    season: Season,
    endSeason: EndSeason,
    news: News
});

export default rootReducer;