import Axios from "axios";

import { SEASON } from "../constants/urlConstants";
import * as Actions from "../actions/seasonActions";
import { handleErrors } from "./helper";
import { browserHistory } from "react-router";


export const get = () => (dispatch) => {
    dispatch(Actions.getRequestPending());

    return Axios.get(SEASON)
        .then(handleErrors)
        .then(response => dispatch(Actions.getRequestSuccess(response.data)))
        .catch(error => dispatch(Actions.getRequestError(error)));
};

export const put = (data) => (dispatch) => {
    dispatch(Actions.putRequestPending(data));

    return Axios.put(SEASON, data)
        .then(() => {
            dispatch(Actions.putRequestSuccess(data));
            browserHistory.push("/season");
        })
        .catch((error) => {
            dispatch(Actions.putRequestError(error));
            browserHistory.push("/season");            
        });
};