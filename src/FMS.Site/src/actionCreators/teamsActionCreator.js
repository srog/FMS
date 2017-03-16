import Axios from "axios";

import { TEAMS } from "../constants/urlConstants";
import * as Actions from "../actions/teamsActions";
import { handleErrors } from "./helper";

export const get = (divisionid) => (dispatch) => {
    dispatch(Actions.getRequestPending(divisionid));

    return Axios.get(`${TEAMS}${divisionid}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};