import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Team = ({ team, onSelect }) => {
    return (
        <Row onClick={onSelect}>
            <Data secondary>{team.name}</Data>
            <Data>{team.division}</Data>
            <Data secondary money>{team.cashDisplay}</Data>
            <Data>{team.squadRating}</Data>
        </Row>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Team;