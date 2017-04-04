import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import Player from "../presentation/player";
import { PLAYER, PLAYER_PUT } from "../../../constants/urlConstants";

class PlayerContainer extends Component {

    _onSelect = () => {
        browserHistory.push(PLAYER({ id: this.props.player.id }));
    }

    _toggleSelected = () => {
        browserHistory.push(PLAYER_PUT({ id: this.props.player.id }));
    }

    render() {
        return <Player player={this.props.player} 
                        toggleSelected={this._toggleSelected}
                        onSelect={this._onSelect} 
                        squad={this.props.squad} />;
    }
}

PlayerContainer.propTypes = {
    player: PropTypes.object.isRequired,
    squad: PropTypes.string
};

export default PlayerContainer;