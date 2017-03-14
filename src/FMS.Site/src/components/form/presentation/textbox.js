import "../styles/input.scss";

import React, { PropTypes } from "react";

const Textbox = ({ value, disabled, onChange }) => {
    const inputValue = !value ? "" : value;
    return (
        <input className="form__input" type="text" value={inputValue} disabled={disabled} onChange={onChange} />
    );
};

Textbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};

Textbox.defaultProps = {
    disabled: false
};

export default Textbox;