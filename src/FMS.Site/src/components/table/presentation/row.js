import "../styles/row.scss";

import React, { PropTypes } from "react";

const TableRow = ({ children, onClick }) => {
    const modifiers = onClick ? " table__row--selectable" : "";

    return (
        <tr className={`table__row${modifiers}`} onClick={onClick}>
            {children}
        </tr>
    );
};

TableRow.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    selectable: PropTypes.bool,
    onClick: PropTypes.func
};

export default TableRow;