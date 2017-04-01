import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { TEAM } from "../../../constants/urlConstants";
import * as Actions from  "../../../actionCreators/squadActionCreator";
import Squad from "../presentation";


export class SquadContainer extends Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        this.props.getPlayers(this.props.params.id);
    }

    _viewTeam = (event) => {
        event.preventDefault();
        browserHistory.push(TEAM({ id: this.props.params.id }));
    }


    render() {
        return <Squad 
            players={this.props.players.data} 
            teamid={this.props.params.id}
            viewTeam={this._viewTeam}
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
        getPlayers: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(SquadContainer);