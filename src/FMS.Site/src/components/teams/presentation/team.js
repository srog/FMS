import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Team = ({ team, onSelect }) => {
    return (
        <Row onClick={onSelect}>
            <Data secondary>{team.initialRanking}</Data>
            <Data secondary>{team.name}</Data>
            <Data>{team.played}</Data>
            <Data>{team.won}</Data>
            <Data>{team.drawn}</Data>
            <Data>{team.lost}</Data>
            <Data>{team.goalsFor}</Data>
            <Data>{team.goalsAgainst}</Data>
            <Data>{team.goalDifference}</Data>
            <Data>{team.points}</Data>
            <Data secondary money>{team.cash}</Data>
        </Row>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Team;