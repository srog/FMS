import { RESULTS } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (divisionId) => ({
    type: buildType(RESULTS, PENDING_SUFFIX),
    payload: divisionId
});

export const getRequestSuccess = (data) => ({
    type: buildType(RESULTS, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(RESULTS, ERROR_SUFFIX),
    payload: error
});
