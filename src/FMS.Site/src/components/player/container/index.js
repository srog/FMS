import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/playerActionCreator";
import Player from "../presentation";


export class PlayerContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPlayer(this.props.params.id);
    }

    render() {
        return <Player playerstats={this.props.player.data} isLoading={this.props.player.isFetching} />;
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