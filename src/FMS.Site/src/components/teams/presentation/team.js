import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Team = ({ team, onSelect }) => {
    return (
        <Row onClick={onSelect}>
            <Data secondary>{team.name}</Data>
            <Data>{team.division + " (" + team.position + ")"}</Data>
            <Data>{team.recentForm}</Data>
            <Data secondary money>{team.cashDisplay}</Data>
            <Data>{team.squadRating}</Data>
            <Data>{team.teamRating}</Data>
            <Data>{team.gkRating}</Data>
            <Data>{team.defRating}</Data>
            <Data>{team.midRating}</Data>
            <Data>{team.stkRating}</Data>
        </Row>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Team;