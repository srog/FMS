import Axios from "axios";

import { PLAYERS } from "../constants/urlConstants";
import * as Actions from "../actions/squadActions";
import { handleErrors } from "./helper";

export const get = (id) => (dispatch) => {
    dispatch(Actions.getRequestPending(id));

    return Axios.get(`${PLAYERS}${id}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};