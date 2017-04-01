import Axios from "axios";

import { SEASON_API } from "../constants/urlConstants";
import * as Actions from "../actions/seasonActions";
import { handleErrors } from "./helper";
import { browserHistory } from "react-router";

const redirect = (redirectUrlFunc) => {
    if (redirectUrlFunc){
        browserHistory.push(redirectUrlFunc());
    }
};

export const get = () => (dispatch) => {
    dispatch(Actions.getRequestPending());

    return Axios.get(SEASON_API)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};

export const put = (data, redirectUrlFunc) => (dispatch) => {
    dispatch(Actions.putRequestPending(data));

    return Axios.put(SEASON_API, data)
        .then(() => {
            dispatch(Actions.putRequestSuccess(data));
            redirect(redirectUrlFunc);
        })
        .catch((error) => {
            dispatch(Actions.putRequestError(error));
            redirect(redirectUrlFunc);            
        });
};