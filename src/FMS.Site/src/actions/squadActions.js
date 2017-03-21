import { PLAYERS } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (teamid) => ({
    type: buildType(PLAYERS, PENDING_SUFFIX),
    payload: teamid
});

export const getRequestSuccess = (data) => ({
    type: buildType(PLAYERS, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(PLAYERS, ERROR_SUFFIX),
    payload: error
});