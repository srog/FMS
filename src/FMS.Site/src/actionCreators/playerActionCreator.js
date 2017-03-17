import Axios from "axios";

import { PLAYER } from "../constants/urlConstants";
import * as Actions from "../actions/playerActions";
import { handleErrors } from "./helper";

export const get = (playerid) => (dispatch) => {
    dispatch(Actions.getRequestPending(playerid));

    return Axios.get(`${PLAYER}${playerid}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};