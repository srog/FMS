import "../styles/table.scss";

import React, { PropTypes } from"react";

const Table = ({ children }) => {
    return (
        <table className="table">
            {children}
        </table>
    );
};

Table.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Table;