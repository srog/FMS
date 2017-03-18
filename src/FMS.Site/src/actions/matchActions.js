import { MATCH } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = () => ({
    type: buildType(MATCH, PENDING_SUFFIX)
});

export const getRequestSuccess = (data) => ({
    type: buildType(MATCH, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(MATCH, ERROR_SUFFIX),
    payload: error
});