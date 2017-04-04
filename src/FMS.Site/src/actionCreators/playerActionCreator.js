import Axios from "axios";

import { PLAYER_API } from "../constants/urlConstants";
import * as Actions from "../actions/playerActions";
import { handleErrors } from "./helper";

export const get = (id) => (dispatch) => {
    dispatch(Actions.getRequestPending(id));

    return Axios.get(`${PLAYER_API}${id}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};

export const put = (data) => (dispatch) => {
    dispatch(Actions.putRequestPending(data));

    return Axios.put(PLAYER_API, data)
        .then(() => {
            dispatch(Actions.putRequestSuccess(data));
        })
        .catch((error) => {
            dispatch(Actions.putRequestError(error));
        });
};