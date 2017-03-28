import React, { PropTypes } from "react";

import Spinner from "../../spinner/presentation";
import Form from "../../form/presentation";
import Row from "../../form/presentation/row";
import Label from "../../form/presentation/label";
import Textbox from "../../form/presentation/textbox";
import Button from "../../button/presentation";

const Player = ({ playerattributes, isLoading, viewTeam }) => {
    return (
        <div>
            <h1>{playerattributes.name}</h1>
                <Button onClick={viewTeam}>Team Page</Button> 

    {isLoading 
        ? <Spinner width={80} />
        :
            <Form>
                <Row>
                    <Label> {playerattributes.team} : {playerattributes.position} </Label>
                    <Label>Overall Rating: {playerattributes.overallRating}</Label>
                    <Label>Value: {playerattributes.value}</Label>
                </Row>
                <Row>
                    <Label>-</Label>
        
                </Row>
                
                <Row>
                    <Label>Pace</Label>
                    <Textbox value={playerattributes.pace} disabled/>
                </Row>
                <Row>
                    <Label>Passing</Label>
                    <Textbox value={playerattributes.passing} disabled/>
                </Row>
                <Row>
                    <Label>Shooting</Label>
                    <Textbox value={playerattributes.shooting} disabled/>
                </Row>
                <Row>
                    <Label>Heading</Label>
                    <Textbox value={playerattributes.heading} disabled/>
                </Row>
                <Row>
                    <Label>Defending</Label>
                    <Textbox value={playerattributes.defending} disabled/>
                </Row>
                <Row>
                    <Label>Handling</Label>
                    <Textbox value={playerattributes.handling} disabled/>
                </Row>
                <Row>
                    <Label>Tackling</Label>
                    <Textbox value={playerattributes.tackling} disabled/>
                </Row>
                <Row>
                    <Label>Aggression</Label>
                    <Textbox value={playerattributes.aggression} disabled/>
                </Row>
                <Row>
                    <Label>Leadership</Label>
                    <Textbox value={playerattributes.leadership} disabled/>
                </Row>
                <Row>
                    <Label>Dribbling</Label>
                    <Textbox value={playerattributes.dribbling} disabled/>
                </Row>
                <Row>
                    <Label>Experience</Label>
                    <Textbox value={playerattributes.experience} disabled/>
                </Row>

            </Form>
}
    </div>
    );
};

Player.propTypes = {
    playerattributes: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewTeam: PropTypes.func.isRequired
};

export default Player;