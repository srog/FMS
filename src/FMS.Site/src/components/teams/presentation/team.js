import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Team = ({ team, onSelect }) => {
    return (
        <Row onClick={onSelect}>
            <Data secondary>{team.initialRanking}</Data>
            <Data secondary>{team.name}</Data>
            <Data>{team.totalRating}</Data>
            <Data>{team.division}</Data>
            <Data>{team.position}</Data>
            <Data secondary money>{team.cashDisplay}</Data>
        </Row>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Team;