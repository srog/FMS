import { TEAMS } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = () => ({
    type: buildType(TEAMS, PENDING_SUFFIX)
});

export const getRequestSuccess = (data) => ({
    type: buildType(TEAMS, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(TEAMS, ERROR_SUFFIX),
    payload: error
});