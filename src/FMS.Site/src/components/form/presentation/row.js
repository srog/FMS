import "../styles/row.scss";

import React, { PropTypes } from "react";

const Row = ({ children }) => {
    return (
        <div className="form__row">
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.array.isRequired
};

export default Row;