import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Player = ({ player, onSelect }) => {

    return (
        <Row onClick={onSelect}>
            <Data secondary>{player.name}</Data>
            <Data>{player.age}</Data>
            <Data>{player.positionDisplay}</Data>
            <Data>{player.isSelected}</Data>
            <Data>{player.rating}</Data>
            <Data money>{player.valueDisplay}</Data>                                                        
            <Data>{player.goals}</Data>
            <Data>{player.assists}</Data>
            <Data>{player.appearances}</Data>
            <Data>{player.redcards}</Data>
        </Row>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Player;