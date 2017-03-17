import { PLAYER } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (playerid) => ({
    type: buildType(PLAYER, PENDING_SUFFIX),
    payload: playerid
});

export const getRequestSuccess = (data) => ({
    type: buildType(PLAYER, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(PLAYER, ERROR_SUFFIX),
    payload: error
});