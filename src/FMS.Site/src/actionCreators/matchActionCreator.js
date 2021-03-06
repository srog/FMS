﻿import Axios from "axios";

import { MATCH_API } from "../constants/urlConstants";
import * as Actions from "../actions/matchActions";
import { handleErrors } from "./helper";

export const get = (id) => (dispatch) => {
    dispatch(Actions.getRequestPending(id));

    return Axios.get(`${MATCH_API}${id}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};