import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/squadActionCreator";
import Squad from "../presentation";


export class SquadContainer extends Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        this.props.getPlayers(this.props.params.teamid);
    }

    render() {
        return <Squad 
            players={this.props.players.data} 
            teamid={this.props.params.teamid}
            isLoading={this.props.players.isFetching} />;
    }
}

SquadContainer.propTypes = {
    getPlayers: PropTypes.func.isRequired,
    players: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        players: state.players.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getPlayers: (teamid) => {
            dispatch(Actions.get(teamid));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(SquadContainer);