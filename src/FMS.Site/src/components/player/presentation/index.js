import React, { PropTypes } from "react";

import Spinner from "../../spinner/presentation";
import Form from "../../form/presentation";
import Row from "../../form/presentation/row";
import Label from "../../form/presentation/label";
import Textbox from "../../form/presentation/textbox";

const Player = ({ player, isLoading }) => {
    return (
        <div>
            <h1>Player</h1>
    {isLoading 
        ? <Spinner width={80} />
        :
            <Form>
                <Row>
                    <Label>Player Id</Label>
                    <Textbox value={player.id} disabled/>
                </Row>
                <Row>
                    <Label>Player Name</Label>
                    <Textbox value={player.name} disabled/>
                </Row>
                <Row>
                    <Label>Rating</Label>
                    <Textbox value={player.rating} disabled/>
                </Row>
                <Row>
                    <Label>Team</Label>
                    <Textbox value={player.team} disabled/>
                </Row>
                <Row>
                    <Label>Value</Label>
                    <Textbox money value={player.valueDisplay} disabled/>
                </Row>
                <Row>
                    <Label>Position</Label>
                    <Textbox value={player.position} disabled/>
                </Row>

            </Form>
}
    </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Player;