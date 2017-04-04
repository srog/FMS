import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";
import Checkbox from "../../form/presentation/checkbox";

const Player = ({ player, onSelect, squad, toggleSelected }) => {

    return (
        <Row onClick={onSelect}>
            <Data secondary>{player.name}</Data>
            { squad == "true" ? null : <Data>{player.team}</Data> }
            <Data>{player.age}</Data>
            <Data>{player.positionDisplay}</Data>
            <Data>{player.rating}</Data>
            <Data>{player.contract}</Data>
            <Data money>{player.valueDisplay}</Data>                                                        
            <Data>{player.goals}</Data>
            <Data>{player.assists}</Data>
            <Data>{player.appearances}</Data>
            <Data>{player.redcards}</Data>
            <Data> <Checkbox 
                        checked={player.selected ? "true" : "false"} 
                        onClick={toggleSelected}
                        disabled={player.isOnPlayersTeam ? false : true} /> 
            </Data>
        </Row>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    squad: PropTypes.string,
    toggleSelected: PropTypes.func.isRequired
};

export default Player;