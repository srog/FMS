import "../styles/container.scss";

import React, { PropTypes } from "react";

const Container = ({ children }) => {

    const className = "container";

    return (
        <div className={className}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired
};

export default Container;