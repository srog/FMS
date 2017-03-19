import { combineReducers } from "redux";
import Teams from "./teams_reducer";
import Team from "./team_reducer";
import Player from "./player_reducer";
import Players from "./players_reducer";
import Division from "./division_reducer";
import Match from "./match_reducer";
import Matches from "./matches_reducer";
import Season from "./season_reducer";

const rootReducer = combineReducers({
    teams: Teams,
    team: Team,
    division: Division,
    player: Player,
    players: Players,
    match: Match,
    matches: Matches,
    season: Season
});

export default rootReducer;