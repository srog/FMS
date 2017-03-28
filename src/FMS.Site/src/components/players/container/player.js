import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import Player from "../presentation/player";

class PlayerContainer extends Component {

    _onSelect = () => {
        browserHistory.push(`/player/${this.props.player.id}`);
    }

    render() {
        return <Player player={this.props.player} onSelect={this._onSelect} squad={this.props.squad} />;
    }
}

PlayerContainer.propTypes = {
    player: PropTypes.object.isRequired,
    squad: PropTypes.string
};

export default PlayerContainer;