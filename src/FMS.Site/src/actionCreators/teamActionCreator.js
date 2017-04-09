import Axios from "axios";

import { TEAM_API } from "../constants/urlConstants";
import * as Actions from "../actions/teamActions";
import { handleErrors } from "./helper";
import { browserHistory } from "react-router";

const redirect = (redirectUrlFunc) => {
    if (redirectUrlFunc){
        browserHistory.push(redirectUrlFunc());
    }
};

export const get = (id) => (dispatch) => {
    dispatch(Actions.getRequestPending(id));

    return Axios.get(`${TEAM_API}${id}`)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};

export const put = (data, redirectUrlFunc) => (dispatch) => {
    dispatch(Actions.putRequestPending(data));

    return Axios.put(TEAM_API, data)
        .then(() => {
            dispatch(Actions.putRequestSuccess(data));
            redirect(redirectUrlFunc);
        })
        .catch((error) => {
            dispatch(Actions.putRequestError(error));            
        });
};