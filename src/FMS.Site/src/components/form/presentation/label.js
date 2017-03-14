import "../styles/label.scss";

import React, { PropTypes } from "react";

const Label = ({ children }) => {
    return (
        <label className="form__label">
            {children}
        </label>
    );
};

Label.propTypes = {
    children: PropTypes.string.isRequired
};

export default Label;