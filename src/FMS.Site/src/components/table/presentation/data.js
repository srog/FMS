import "../styles/data.scss";
import React, { PropTypes } from "react";

const TableData = ({ children, secondary, money }) => {
    const modifiers = secondary 
        ? "table__data--secondary" 
        : "";
    
    return (
        <td className={`table__data ${modifiers}`}>
           {money ? "£" : ""} {children}
        </td>
    );
};

TableData.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    secondary: PropTypes.bool,
    money: PropTypes.bool
};

TableData.defaultProps = {
    secondary: false,
    money: false
};

export default TableData;