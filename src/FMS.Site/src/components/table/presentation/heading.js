import "../styles/heading.scss";

import React, { PropTypes } from "react";

const TableHeading = ({ children, secondary }) => {
    const modifiers = secondary 
        ? "table__heading--secondary" 
        : "";

    return (
        <th className={`table__heading ${modifiers}`}>
            {children}
        </th>
    );
};

TableHeading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    secondary: PropTypes.bool
};

TableHeading.defaultProps = {
    secondary: false
};

export default TableHeading;