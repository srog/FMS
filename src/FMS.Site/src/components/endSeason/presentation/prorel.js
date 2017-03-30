import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const ProRel = ({ prorel }) => {

    return (
        <Row>
            <Data>{prorel.division}</Data>
            <Data>{prorel.status}</Data>
            <Data>{prorel.team}</Data>
        </Row>
    );
};

ProRel.propTypes = {
    prorel: PropTypes.object.isRequired
};

export default ProRel;