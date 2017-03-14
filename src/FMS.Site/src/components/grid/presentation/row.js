import "../styles/row.scss";

import React, { PropTypes } from "react";

const Row = ({ children }) => {

    const className = "row";

    return (
        <div className={className}>
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired
};

export default Row;