import { List, fromJS } from "Immutable";
import { RESULTS_GET } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";

const initialState = fromJS({
    isFetching: false,
    lastFetchTime: 0,
    data: [],
    error: null,
    isInvalidated: false,
    consecutiveFailureCount: 0
});

export default function resultsReducer(state = initialState, { type, payload }){
    switch (type) {
    case `${RESULTS_GET}_${PENDING_SUFFIX}`:
        return state.merge({
            isFetching: true
        });

    case `${RESULTS_GET}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isFetching: false,
            data: List(payload)
        });

    case `${RESULTS_GET}_${ERROR_SUFFIX}`:
        return state.merge({
            isFetching: false,
            error: payload,
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    default:
        return state;
    }
}