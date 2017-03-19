import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const TeamStats = ({ teamstats }) => {
    return (
        <Row>
            <Data secondary>{teamstats.position}</Data>
            <Data secondary>{teamstats.name}</Data>
            <Data>{teamstats.played}</Data>
            <Data>{teamstats.won}</Data>
            <Data>{teamstats.drawn}</Data>
            <Data>{teamstats.lost}</Data>
            <Data>{teamstats.goalsFor}</Data>
            <Data>{teamstats.goalsAgainst}</Data>
            <Data>{teamstats.goalDifference}</Data>
            <Data>{teamstats.points}</Data>
        </Row>
    );
};

TeamStats.propTypes = {
    teamstats: PropTypes.object.isRequired
};

export default TeamStats;