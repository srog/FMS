import "../styles/input.scss";

import React, { PropTypes } from "react";

const Textbox = ({ value, disabled, onChange, money }) => {
    const inputValue = !value ? "" : value;
    return (
        <input className="form__input" type="text" value={(money ? "£" : "") + inputValue} disabled={disabled} onChange={onChange} />
    );
};

Textbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    money: PropTypes.bool
};

Textbox.defaultProps = {
    disabled: false,
    money: false
};

export default Textbox;