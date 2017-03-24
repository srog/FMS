import React, { PropTypes } from "react";

import MatchEventsTable from "./matchEventsTable";

import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";
import Form from "../../form/presentation";
import Row from "../../form/presentation/row";
import Label from "../../form/presentation/label";
import Textbox from "../../form/presentation/textbox";


const Match = ({ match, matchevents, isLoading, viewDivision }) => {
    return (
        <div>
            <h1>Match Details</h1>
            <h2>Season: {match.seasonId}</h2>
            <h2>  Week: {match.weekId}</h2>
            <br/>
            <h3>Match Id: {match.id}</h3>
            <br/>
    
    {isLoading 
        ? <Spinner width={80} />
        :
            <Form>
                <Row>
                    <Label>Home Team</Label>
                    <Textbox secondary value={match.homeTeam + ":" + match.homeTeamScore} disabled />
                </Row>
                <Row>
                    <Label>Away Team</Label>
                    <Textbox secondary value={match.awayTeam + ":" + match.awayTeamScore} disabled />
                </Row>
            </Form>
            
        }
        <br/>
        <MatchEventsTable matchevents={matchevents} />
        <br/>    
        <Button onClick={viewDivision}>League Table</Button>
  
    </div>
    );
};

Match.propTypes = {
    match: PropTypes.object.isRequired,
    matchevents: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewDivision: PropTypes.func.isRequired
};

export default Match;