import "../styles/breadcrumb.scss";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const Breadcrumb = ({ children, to }) => {
    return (<Link className="breadcrumb" to={to}>{children}</Link>);
};

Breadcrumb.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default Breadcrumb;