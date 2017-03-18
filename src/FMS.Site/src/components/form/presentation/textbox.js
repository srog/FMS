import "../styles/input.scss";

import React, { PropTypes } from "react";

const Textbox = ({ value, disabled, onChange, money }) => {
    return (
        <input className="form__input" type="text" value={(money ? "£" : "") + value} disabled={disabled} onChange={onChange} />
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