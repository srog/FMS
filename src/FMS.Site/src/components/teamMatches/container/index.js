import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as Actions from  "../../../actionCreators/teamMatchesActionCreator";
import TeamMatches from "../presentation";
import { SEASON } from "../../../constants/urlConstants";

export class TeamMatchesContainer extends Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        this.props.getTeamMatches(this.props.params.id);
    }

    _viewTable = (event) => {
        event.preventDefault();
        browserHistory.push(SEASON);
    }


    render() {
        return <TeamMatches 
        matches={this.props.matches.data} 
        teamId={this.props.params.id}
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
        getTeamMatches: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamMatchesContainer);