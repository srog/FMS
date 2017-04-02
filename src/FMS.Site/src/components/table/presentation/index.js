import "../styles/table.scss";

import React, { PropTypes } from"react";

const Table = ({ children, compact }) => {
    const modifiers = compact 
        ? "table--compact" 
        : "";
    
    return (
        <table className={`table ${modifiers}`}>
            {children}
        </table>
    );
};

Table.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    compact: PropTypes.bool
};

export default Table;