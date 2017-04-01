import { PLAYERS_GET } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (id) => ({
    type: buildType(PLAYERS_GET, PENDING_SUFFIX),
    payload: id
});

export const getRequestSuccess = (data) => ({
    type: buildType(PLAYERS_GET, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(PLAYERS_GET, ERROR_SUFFIX),
    payload: error
});