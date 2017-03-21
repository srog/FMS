import Axios from "axios";

import { RESULTS } from "../constants/urlConstants";
import * as Actions from "../actions/matchesActions";
import { handleErrors } from "./helper";

export const get = (divisionId) => (dispatch) => {
    dispatch(Actions.getRequestPending(divisionId));

    return Axios.get(`${RESULTS}${divisionId}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};
