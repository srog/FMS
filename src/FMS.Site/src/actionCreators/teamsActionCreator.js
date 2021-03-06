﻿import Axios from "axios";

import { TEAMS_API } from "../constants/urlConstants";
import * as Actions from "../actions/teamsActions";
import { handleErrors } from "./helper";

export const get = () => (dispatch) => {
    dispatch(Actions.getRequestPending());

    return Axios.get(TEAMS_API)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};