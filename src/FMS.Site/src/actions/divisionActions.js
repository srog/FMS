import { DIVISION } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (divisionid) => ({
    type: buildType(DIVISION, PENDING_SUFFIX),
    payload: divisionid
});

export const getRequestSuccess = (data) => ({
    type: buildType(DIVISION, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(DIVISION, ERROR_SUFFIX),
    payload: error
});