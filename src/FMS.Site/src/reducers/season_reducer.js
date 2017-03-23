import { Map, fromJS } from "Immutable";
import { SEASON, SEASON_PUT } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";

const initialState = fromJS({
    isFetching: false,
    lastFetchTime: 0,
    data: {},
    error: null,
    isInvalidated: false,
    consecutiveFailureCount: 0
});

export default function seasonReducer(state = initialState, { type, payload }){
    switch (type) {
    case `${SEASON}_${PENDING_SUFFIX}`:
        return state.merge({
            isFetching: true
        });

    case `${SEASON}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isFetching: false,
            data: Map(payload)
        });

    case `${SEASON}_${ERROR_SUFFIX}`:
        return state.merge({
            isFetching: false,
            error: payload,
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    case `${SEASON_PUT}_${PENDING_SUFFIX}`:
        return state.merge({
            isInvalidated: true,
            data: Map(payload)
        });

    case `${SEASON_PUT}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isInvalidated: false,
            data: Map(payload),
            consecutiveFailureCount: 0
        });

    case `${SEASON_PUT}_${ERROR_SUFFIX}`:
        return state.merge({
            isInvalidated: true,
            error: Map(payload),
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    default:
        return state;
    }
}