import { SEASON, SEASON_PUT } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = () => ({
    type: buildType(SEASON, PENDING_SUFFIX)
});

export const getRequestSuccess = (data) => ({
    type: buildType(SEASON, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(SEASON, ERROR_SUFFIX),
    payload: error
});

export const putRequestPending = (data) => ({
    type: buildType(SEASON_PUT, PENDING_SUFFIX),
    payload: data
});

export const putRequestSuccess = (data) => ({
    type: buildType(SEASON_PUT, SUCCESS_SUFFIX),
    payload: data
});

export const putRequestError = (error) => ({
    type: buildType(SEASON_PUT, ERROR_SUFFIX),
    payload: error
});