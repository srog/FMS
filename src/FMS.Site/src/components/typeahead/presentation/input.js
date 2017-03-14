import React, { PropTypes } from "react";

const Input = ({ value, updateValue }) => {
    return <input type="text" value={value} onChange={updateValue}/>;
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired
};

export default Input;