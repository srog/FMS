import { List, fromJS } from "Immutable";
import { MATCHES_GET } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";

const initialState = fromJS({
    isFetching: false,
    lastFetchTime: 0,
    data: [],
    error: null,
    isInvalidated: false,
    consecutiveFailureCount: 0
});

export default function matchesReducer(state = initialState, { type, payload }){
    switch (type) {
    case `${MATCHES_GET}_${PENDING_SUFFIX}`:
        return state.merge({
            isFetching: true
        });

    case `${MATCHES_GET}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isFetching: false,
            data: List(payload)
        });

    case `${MATCHES_GET}_${ERROR_SUFFIX}`:
        return state.merge({
            isFetching: false,
            error: payload,
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    default:
        return state;
    }
}