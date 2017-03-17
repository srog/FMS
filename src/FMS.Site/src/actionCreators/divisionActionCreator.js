import Axios from "axios";

import { DIVISION } from "../constants/urlConstants";
import * as Actions from "../actions/divisionActions";
import { handleErrors } from "./helper";

export const get = (divisionid) => (dispatch) => {
    dispatch(Actions.getRequestPending(divisionid));

    return Axios.get(`${DIVISION}${divisionid}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};