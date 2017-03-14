import "../styles/spinner.scss";
import Image from "../images/spinner.gif";

import React, { PropTypes } from "react";

const Spinner = ({ width }) => {
    return (
        <img className="spinner" src={Image} width={width}/>
    );
};

Spinner.propTypes = {
    width: PropTypes.number
};

Spinner.defaultProps = {
    width: 100
};

export default Spinner;