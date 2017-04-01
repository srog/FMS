import Axios from "axios";

import { TEAMMATCHES_API } from "../constants/urlConstants";
import * as Actions from "../actions/teamMatchesActions";
import { handleErrors } from "./helper";

export const get = (teamId) => (dispatch) => {
    dispatch(Actions.getRequestPending(teamId));

    return Axios.get(`${TEAMMATCHES_API}${teamId}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};
