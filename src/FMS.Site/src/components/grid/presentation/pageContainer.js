import "../styles/pageContainer.scss";

import React, { PropTypes } from "react";

import Container from "./container";

const PageContainer = ({ children }) => {

    const className = "page-container";

    return (
        <div className={className}>
            <Container>
                {children}
            </Container>
        </div>
    );
};

PageContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageContainer;