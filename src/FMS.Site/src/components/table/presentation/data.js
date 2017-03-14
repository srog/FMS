import "../styles/data.scss";

import React, { PropTypes } from "react";

const TableData = ({ children, secondary }) => {
    const modifiers = secondary 
        ? "table__data--secondary" 
        : "";

    return (
        <td className={`table__data ${modifiers}`}>
            {children}
        </td>
    );
};

TableData.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    secondary: PropTypes.bool
};

TableData.defaultProps = {
    secondary: false
};

export default TableData;