import Axios from "axios";

import { MATCHES } from "../constants/urlConstants";
import * as Actions from "../actions/matchesActions";
import { handleErrors } from "./helper";

export const get = (id) => (dispatch) => {
    dispatch(Actions.getRequestPending(id));

    return Axios.get(`${MATCHES}${id}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};

