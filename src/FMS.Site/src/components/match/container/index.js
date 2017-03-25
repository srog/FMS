import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as MatchEventActions from  "../../../actionCreators/matchEventsActionCreator";
import * as Actions from  "../../../actionCreators/matchActionCreator";

import Match from "../presentation";

export class MatchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getMatch(this.props.params.id);
        this.props.getMatchEvents(this.props.params.id);
    }

    _viewDivision = (event) => {
        event.preventDefault();
        browserHistory.push(`/division/${this.props.match.data.divisionId}`);
    }

    render() {
        return <Match 
        match={this.props.match.data} 
        matchevents={this.props.matchevents.data} 
            viewDivision={this._viewDivision}
            isLoading={this.props.match.isFetching} />;
    }
}

MatchContainer.propTypes = {
    getMatch: PropTypes.func.isRequired,
    getMatchEvents: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    matchevents: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        match: state.match.toJS(),
        matchevents: state.matchEvents.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getMatch: (id) => {
            dispatch(Actions.get(id));
        },
        getMatchEvents: (id) => {
            dispatch(MatchEventActions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(MatchContainer);