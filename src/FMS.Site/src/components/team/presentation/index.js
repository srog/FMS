import React, { PropTypes } from "react";

import Spinner from "../../spinner/presentation";
import Form from "../../form/presentation";
import Row from "../../form/presentation/row";
import Label from "../../form/presentation/label";
import Textbox from "../../form/presentation/textbox";
import Button from "../../button/presentation";

const Team = ({ team, isLoading, viewSquad, viewMatches }) => {
    return (
        <div>
            <h1>{team.name} - Team Info</h1>
    {isLoading 
        ? <Spinner width={80} />
        :
            <Form>
             
                <Row>
                    <Label>Cash</Label>
                    <Textbox money value={team.cashDisplay} disabled/>
                </Row>
                <Row>
                    <Label>Total Rating</Label>
                    <Textbox value={team.totalRating} disabled/>
                </Row>
                <Row>
                    <Label>Division</Label>
                    <Textbox value={team.division} disabled/>
                </Row>
                <Row>
                    <Label>Position</Label>
                    <Textbox value={team.position} disabled/>
                </Row>
                <Row>
                    <Label>Formation</Label>
                    <Textbox value={team.formationDisplay} disabled/>
                </Row>
                <Row>
                    <Label>Recent Form</Label>
                    <Textbox value={team.recentForm} disabled/>
                </Row>
                
                <Button alignRight disabled onClick={viewMatches}>View Matches</Button>
                <Button alignRight onClick={viewSquad}>View Squad</Button>

            </Form>
    }
    </div>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewSquad: PropTypes.func.isRequired,
    viewMatches: PropTypes.func.isRequired
};

export default Team;