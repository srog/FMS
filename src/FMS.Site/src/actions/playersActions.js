import { PLAYERS } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = () => ({
    type: buildType(PLAYERS, PENDING_SUFFIX)
});

export const getRequestSuccess = (data) => ({
    type: buildType(PLAYERS, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(PLAYERS, ERROR_SUFFIX),
    payload: error
});