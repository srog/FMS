import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";
import Button from "../../button/presentation";

const Match = ({ match, playMatch }) => {

    return (
        <Row>
            <Data>{match.id}</Data>
            {match.completed == "No" ?
            <Data>{match.homeTeam + " : " + match.awayTeam}</Data>
            :
            <Data>{match.homeTeam + " " + match.homeTeamScore + " : " + match.awayTeamScore + " : " + match.awayTeam}</Data>
            }

            <Data>{match.completed}</Data>
            <Data>
            {match.completed == "No" && match.weekId == match.currentWeek ? 
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