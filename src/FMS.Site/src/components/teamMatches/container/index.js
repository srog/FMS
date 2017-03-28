import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as Actions from  "../../../actionCreators/teamMatchesActionCreator";
import TeamMatches from "../presentation";


export class TeamMatchesContainer extends Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        this.props.getTeamMatches(this.props.params.teamId);
    }

    _viewTable = (event) => {
        event.preventDefault();
        browserHistory.push("/season");
    }


    render() {
        return <TeamMatches 
        matches={this.props.matches.data} 
        teamId={this.props.params.teamId}
        viewTable={this._viewTable}
        isLoading={this.props.matches.isFetching} />;
    }
}

TeamMatchesContainer.propTypes = {
    getTeamMatches: PropTypes.func.isRequired,
    matches: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        matches: state.teamMatches.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getTeamMatches: (teamId) => {
            dispatch(Actions.get(teamId));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamMatchesContainer);