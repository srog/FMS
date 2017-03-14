import React, { PropTypes } from "react";

const TableBody = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    );
};

TableBody.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default TableBody;