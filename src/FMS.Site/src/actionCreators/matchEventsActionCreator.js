import Axios from "axios";

import { MATCHEVENTS } from "../constants/urlConstants";
import * as Actions from "../actions/matchEventsActions";
import { handleErrors } from "./helper";

export const get = (id) => (dispatch) => {
    dispatch(Actions.getRequestPending(id));

    return Axios.get(`${MATCHEVENTS}${id}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};
