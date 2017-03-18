﻿import { List, fromJS } from "Immutable";
import { PLAYERS } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";

const initialState = fromJS({
    isFetching: false,
    lastFetchTime: 0,
    data: [],
    error: null,
    isInvalidated: false,
    consecutiveFailureCount: 0
});

export default function playersReducer(state = initialState, { type, payload }){
    switch (type) {
        case `${PLAYERS}_${PENDING_SUFFIX}`:
            return state.merge({
                isFetching: true
            });

        case `${PLAYERS}_${SUCCESS_SUFFIX}`:
            return state.merge({
                isFetching: false,
                data: List(payload)
            });

        case `${PLAYERS}_${ERROR_SUFFIX}`:
            return state.merge({
                isFetching: false,
                error: payload,
                consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
            });

        default:
            return state;
    }
}