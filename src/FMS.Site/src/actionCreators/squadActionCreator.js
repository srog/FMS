import Axios from "axios";

import { PLAYERS_API } from "../constants/urlConstants";
import * as Actions from "../actions/squadActions";
import { handleErrors } from "./helper";

export const get = (teamid) => (dispatch) => {
    dispatch(Actions.getRequestPending(teamid));

    return Axios.get(`${PLAYERS_API}${teamid}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};