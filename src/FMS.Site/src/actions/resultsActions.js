﻿import { RESULTS_GET } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";
import { buildType } from "./helpers";

export const getRequestPending = (divisionId) => ({
    type: buildType(RESULTS_GET, PENDING_SUFFIX),
    payload: divisionId
});

export const getRequestSuccess = (data) => ({
    type: buildType(RESULTS_GET, SUCCESS_SUFFIX),
    payload: data
});

export const getRequestError = (error) => ({
    type: buildType(RESULTS_GET, ERROR_SUFFIX),
    payload: error
});
