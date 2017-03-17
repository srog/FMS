import { combineReducers } from "redux";
import Teams from "./teams_reducer";
import Team from "./team_reducer";
import Division from "./division_reducer";

const rootReducer = combineReducers({
    teams: Teams,
    team: Team,
    division: Division
});

export default rootReducer;