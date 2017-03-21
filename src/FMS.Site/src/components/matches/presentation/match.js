import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";
import Button from "../../button/presentation";

const Match = ({ match, playMatch }) => {

    return (
        <Row>
            <Data>{match.id}</Data>
            <Data>{match.homeTeam}</Data>
            <Data>{match.awayTeam}</Data>
            <Data>{match.homeTeamScore}</Data>
            <Data>{match.awayTeamScore}</Data>
            <Data>{match.completed}</Data>
            <Data>
            {match.completed == "No" ? 
                <Button onClick={playMatch}>Play Match</Button>
            : <Button state="success" onClick={playMatch}>View Match</Button> 
            }</Data>
                
        </Row>
    );
};

Match.propTypes = {
    match: PropTypes.object.isRequired,
    playMatch: PropTypes.func.isRequired
};

export default Match;