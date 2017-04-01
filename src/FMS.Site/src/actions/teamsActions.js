import { TEAMS_GET } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = () => ({
    type: buildType(TEAMS_GET, PENDING_SUFFIX)
});

export const getRequestSuccess = (data) => ({
    type: buildType(TEAMS_GET, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(TEAMS_GET, ERROR_SUFFIX),
    payload: error
});