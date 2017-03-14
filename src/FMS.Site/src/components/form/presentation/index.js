import "../styles/form.scss";

import React, { PropTypes } from "react";

const Form = ({ children }) => {

    return (
        <form className="form">
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.array.isRequired
};

export default Form;