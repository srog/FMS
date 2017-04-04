import { Map, fromJS } from "Immutable";
import { PLAYER_GET, PLAYER_PUT } from "../constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../constants/reduxConstants";

const initialState = fromJS({
    isFetching: false,
    lastFetchTime: 0,
    data: {},
    error: null,
    isInvalidated: false,
    consecutiveFailureCount: 0
});

export default function playerReducer(state = initialState, { type, payload }){
    switch (type) {
    case `${PLAYER_GET}_${PENDING_SUFFIX}`:
        return state.merge({
            isFetching: true
        });

    case `${PLAYER_GET}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isFetching: false,
            data: Map(payload)
        });

    case `${PLAYER_GET}_${ERROR_SUFFIX}`:
        return state.merge({
            isFetching: false,
            error: payload,
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    case `${PLAYER_PUT}_${PENDING_SUFFIX}`:
        return state.merge({
            isInvalidated: true,
            data: Map(payload)
        });

    case `${PLAYER_PUT}_${SUCCESS_SUFFIX}`:
        return state.merge({
            isInvalidated: false,
            data: Map(payload),
            consecutiveFailureCount: 0
        });

    case `${PLAYER_PUT}_${ERROR_SUFFIX}`:
        return state.merge({
            isInvalidated: true,
            error: Map(payload),
            consecutiveFailureCount: state.get("consecutiveFailureCount") + 1
        });

    default:
        return state;
    }
}