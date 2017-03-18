import React, { PropTypes } from "react";

import Spinner from "../../spinner/presentation";
import Form from "../../form/presentation";
import Row from "../../form/presentation/row";
import Label from "../../form/presentation/label";
import Textbox from "../../form/presentation/textbox";
import Button from "../../button/presentation";

const Team = ({ team, isLoading, viewSquad }) => {
    return (
        <div>
            <h1>Team</h1>
    {isLoading 
        ? <Spinner width={80} />
        :
            <Form>
                <Row>
                    <Label>Team Id</Label>
                    <Textbox value={team.id} disabled/>
                </Row>
                <Row>
                    <Label>Team Name</Label>
                    <Textbox value={team.name} disabled/>
                </Row>
                <Row>
                    <Label>Ranking</Label>
                    <Textbox value={team.initialRanking} disabled/>
                </Row>
                <Row>
                    <Label>Cash</Label>
                    <Textbox money value={team.cash} disabled/>
                </Row>
                <Row>
                    <Label>Total Rating</Label>
                    <Textbox value={team.totalRating} disabled/>
                </Row>
                <Row>
                    <Label>Division</Label>
                    <Textbox value={team.division} disabled/>
                </Row>
                
                <Button alignRight onClick={viewSquad}>View Squad</Button>

            </Form>
    }
    </div>
    );
};

Team.propTypes = {
    team: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewSquad: PropTypes.func.isRequired
};

export default Team;