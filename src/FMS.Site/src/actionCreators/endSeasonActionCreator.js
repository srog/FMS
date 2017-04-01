import Axios from "axios";

import { ENDSEASON_API } from "../constants/urlConstants";
import * as Actions from "../actions/endSeasonActions";
import { handleErrors } from "./helper";

export const get = () => (dispatch) => {
    dispatch(Actions.getRequestPending());

    return Axios.get(ENDSEASON_API)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};