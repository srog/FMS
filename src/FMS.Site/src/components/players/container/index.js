import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/playersActionCreator";
import Players from "../presentation";


export class PlayersContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        return <Players all players={this.props.players.data} isLoading={this.props.players.isFetching} />;
    }
}

PlayersContainer.propTypes = {
    getPlayers: PropTypes.func.isRequired,
    players: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        players: state.players.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getPlayers: () => {
            dispatch(Actions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(PlayersContainer);