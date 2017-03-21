import { MATCHES } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (divisionId) => ({
    type: buildType(MATCHES, PENDING_SUFFIX),
    payload: divisionId
});

export const getRequestSuccess = (data) => ({
    type: buildType(MATCHES, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(MATCHES, ERROR_SUFFIX),
    payload: error
});
