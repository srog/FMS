import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as Actions from  "../../../actionCreators/playerActionCreator";
import Player from "../presentation";
import { TEAM } from "../../../constants/urlConstants";


export class PlayerContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPlayer(this.props.params.id);
    }

    _viewTeam = (event) => {
        event.preventDefault();
        browserHistory.push(TEAM({ id: this.props.player.data.teamId }));
    }

    render() {
        return <Player 
                    playerattributes={this.props.player.data} 
                    isLoading={this.props.player.isFetching} 
                    viewTeam={this._viewTeam} />;
    }
}

PlayerContainer.propTypes = {
    getPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        player: state.player.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getPlayer: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(PlayerContainer);