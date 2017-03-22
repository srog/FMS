import React, { PropTypes } from "react";

import Spinner from "../../spinner/presentation";
import Form from "../../form/presentation";
import Row from "../../form/presentation/row";
import Label from "../../form/presentation/label";
import Textbox from "../../form/presentation/textbox";

const Player = ({ playerstats, isLoading }) => {
    return (
        <div>
            <h1>{playerstats.name}</h1>
    {isLoading 
        ? <Spinner width={80} />
        :
            <Form>
                <Row>
                    <Label> {playerstats.team} : {playerstats.position} </Label>
                    <Label>Overall Rating: {playerstats.overallRating}</Label>
                    <Label>Value: {playerstats.value}</Label>
                </Row>
                <Row>
                    <Label>-</Label>
        
                </Row>
                
                <Row>
                    <Label>Pace</Label>
                    <Textbox value={playerstats.pace} disabled/>
                </Row>
                <Row>
                    <Label>Passing</Label>
                    <Textbox value={playerstats.passing} disabled/>
                </Row>
                <Row>
                    <Label>Shooting</Label>
                    <Textbox value={playerstats.shooting} disabled/>
                </Row>
                <Row>
                    <Label>Heading</Label>
                    <Textbox value={playerstats.heading} disabled/>
                </Row>
                <Row>
                    <Label>Defending</Label>
                    <Textbox value={playerstats.defending} disabled/>
                </Row>
                <Row>
                    <Label>Handling</Label>
                    <Textbox value={playerstats.handling} disabled/>
                </Row>
                <Row>
                    <Label>Tackling</Label>
                    <Textbox value={playerstats.tackling} disabled/>
                </Row>
                <Row>
                    <Label>Aggression</Label>
                    <Textbox value={playerstats.aggression} disabled/>
                </Row>
                <Row>
                    <Label>Leadership</Label>
                    <Textbox value={playerstats.leadership} disabled/>
                </Row>
                <Row>
                    <Label>Dribbling</Label>
                    <Textbox value={playerstats.dribbling} disabled/>
                </Row>
                <Row>
                    <Label>Experience</Label>
                    <Textbox value={playerstats.experience} disabled/>
                </Row>

            </Form>
}
    </div>
    );
};

Player.propTypes = {
    playerstats: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Player;