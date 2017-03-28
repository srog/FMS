import { TEAMMATCHES } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (teamId) => ({
    type: buildType(TEAMMATCHES, PENDING_SUFFIX),
    payload: teamId
});

export const getRequestSuccess = (data) => ({
    type: buildType(TEAMMATCHES, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(TEAMMATCHES, ERROR_SUFFIX),
    payload: error
});
