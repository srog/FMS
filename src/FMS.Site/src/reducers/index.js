import { combineReducers } from "redux";
import Teams from "./teams_reducer";

const rootReducer = combineReducers({
    teams: Teams
});

export default rootReducer;