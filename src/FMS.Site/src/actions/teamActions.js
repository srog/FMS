import { TEAM } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (teamid) => ({
    type: buildType(TEAM, PENDING_SUFFIX),
    payload: teamid
});

export const getRequestSuccess = (data) => ({
    type: buildType(TEAM, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(TEAM, ERROR_SUFFIX),
    payload: error
});