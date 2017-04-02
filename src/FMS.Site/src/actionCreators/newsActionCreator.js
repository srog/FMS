import Axios from "axios";

import { NEWS_API } from "../constants/urlConstants";
import * as Actions from "../actions/newsActions";
import { handleErrors } from "./helper";

export const get = () => (dispatch) => {
    dispatch(Actions.getRequestPending());

    return Axios.get(NEWS_API)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};