import { Map, fromJS } from "Immutable";
import { TEAM } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";

const initialState = fromJS({
    isFetching: false,
    lastFetchTime: 0,
    data: {},
    error: null,
    isInvalidated: false,
    consecutiveFailureCount: 0
});

export default function teamReducer(state = initialState, { type, payload }){
    switch (type) {
    case `${TEAM}_${PENDING_SUFFIX}`:
        return state.merge({
            isFetching: true
        });

    case `${TEAM}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isFetching: false,
            data: Map(payload)
        });

    case `${TEAM}_${ERROR_SUFFIX}`:
        return state.merge({
            isFetching: false,
            error: payload,
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    default:
        return state;
    }
}