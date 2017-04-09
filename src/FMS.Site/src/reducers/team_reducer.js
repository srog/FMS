import { Map, fromJS } from "Immutable";
import { TEAM_GET, TEAM_PUT } from "../constants/actionConstants";
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
    case `${TEAM_GET}_${PENDING_SUFFIX}`:
        return state.merge({
            isFetching: true
        });

    case `${TEAM_GET}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isFetching: false,
            data: Map(payload)
        });

    case `${TEAM_GET}_${ERROR_SUFFIX}`:
        return state.merge({
            isFetching: false,
            error: payload,
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    case `${TEAM_PUT}_${PENDING_SUFFIX}`:
        return state.merge({
            isInvalidated: true,
            data: Map(payload)
        });

    case `${TEAM_PUT}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isInvalidated: false,
            data: Map(payload),
            consecutiveFailureCount: 0
        });

    case `${TEAM_PUT}_${ERROR_SUFFIX}`:
        return state.merge({
            isInvalidated: true,
            error: Map(payload),
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    default:
        return state;
    }
}