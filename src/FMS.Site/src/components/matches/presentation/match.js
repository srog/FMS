import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Match = ({ match }) => {

    return (
        <Row>
            <Data>{match.id}</Data>
            <Data>{match.homeTeam}</Data>
            <Data>{match.awayTeam}</Data>
            <Data>{match.homeTeamScore}</Data>
            <Data>{match.awayTeamScore}</Data>
            <Data>{match.completed}</Data>
        </Row>
    );
};

Match.propTypes = {
    match: PropTypes.object.isRequired
};

export default Match;