import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Team = ({ team }) => {
    return (
        <Row>
            <Data>{team.id}</Data>
            <Data>{team.name}</Data>
            <Data>{team.initialRanking}</Data>
        </Row>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired
};

export default Team;