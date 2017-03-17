import Axios from "axios";

import { TEAM } from "../constants/urlConstants";
import * as Actions from "../actions/teamActions";
import { handleErrors } from "./helper";

export const get = (teamid) => (dispatch) => {
    dispatch(Actions.getRequestPending(teamid));

    return Axios.get(`${TEAM}${teamid}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};