import Axios from "axios";

import { PLAYERS } from "../constants/urlConstants";
import * as Actions from "../actions/playersActions";
import { handleErrors } from "./helper";

export const get = () => (dispatch) => {
    dispatch(Actions.getRequestPending());

    return Axios.get(PLAYERS)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};