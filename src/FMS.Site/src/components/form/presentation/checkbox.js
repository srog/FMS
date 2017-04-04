import "../styles/input.scss";

import React, { PropTypes } from "react";

const Checkbox = ({ value, disabled, checked, onClick }) => {
    return (  checked == "true" ?
        <input type="checkbox" value={value} disabled={disabled} onChange={onClick} checked  /> 
        :
        <input  type="checkbox" value={value} disabled={disabled} onChange={onClick} />             
    );
};

Checkbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    checked: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    disabled: false,
    value: ""
};

export default Checkbox;