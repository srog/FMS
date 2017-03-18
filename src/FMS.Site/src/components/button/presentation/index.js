import "../styles/button.scss";

import React, { PropTypes } from "react";

const Button = ({ children, onClick, state, alignRight }) => {
    var modifier = "";

    switch (state) {
    case "warning":
        modifier = "button--warning";
        break;
    case "error":
        modifier = "button--error";
        break;
    case "success":
        modifier = "button--success";
        break;
    }

    modifier += alignRight ? " button--alignRight" : "";

    return (
        <button className={`button ${modifier}`} onClick={onClick} >
            {children}
        </button>
    );
};

Button.defaultProps = {
    warning: false,
    alignRight: false
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    alignRight: PropTypes.bool,
    state: PropTypes.oneOf(["warning", "error", "success"])
};

export default Button;