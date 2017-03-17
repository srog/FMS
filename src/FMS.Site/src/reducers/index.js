import { combineReducers } from "redux";
import Teams from "./teams_reducer";
import Division from "./division_reducer";

const rootReducer = combineReducers({
    teams: Teams,
    division: Division
});

export default rootReducer;