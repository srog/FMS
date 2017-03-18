import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/matchActionCreator";
import Match from "../presentation";


export class MatchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMatch();
    }

    render() {
        return <Match match={this.props.match.data} isLoading={this.props.match.isFetching} />;
    }
}

MatchContainer.propTypes = {
    getMatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        match: state.match.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getMatch: () => {
            dispatch(Actions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(MatchContainer);