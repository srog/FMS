import { TEAM_GET } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (teamid) => ({
    type: buildType(TEAM_GET, PENDING_SUFFIX),
    payload: teamid
});

export const getRequestSuccess = (data) => ({
    type: buildType(TEAM_GET, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(TEAM_GET, ERROR_SUFFIX),
    payload: error
});