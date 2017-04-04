import { PLAYER_GET, PLAYER_PUT } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (playerid) => ({
    type: buildType(PLAYER_GET, PENDING_SUFFIX),
    payload: playerid
});

export const getRequestSuccess = (data) => ({
    type: buildType(PLAYER_GET, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(PLAYER_GET, ERROR_SUFFIX),
    payload: error
});

export const putRequestPending = (data) => ({
    type: buildType(PLAYER_PUT, PENDING_SUFFIX),
    payload: data
});

export const putRequestSuccess = (data) => ({
    type: buildType(PLAYER_PUT, SUCCESS_SUFFIX),
    payload: data
});

export const putRequestError = (error) => ({
    type: buildType(PLAYER_PUT, ERROR_SUFFIX),
    payload: error
});