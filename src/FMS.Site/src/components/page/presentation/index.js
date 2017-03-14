import React, { PropTypes } from "react";

import NavContainer from "../../nav/container";
import PageContainer from "../../grid/presentation/pageContainer";

const Page = ({ children }) => {
    return(
        <div>
            <NavContainer/>
            <PageContainer>
                {children}
            </PageContainer>
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.element.isRequired
};

export default Page;