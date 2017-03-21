import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/matchesActionCreator";
import Matches from "../presentation";


export class MatchesContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMatches(this.props.params.divisionId);
    }

    render() {
        return <Matches 
            matches={this.props.matches.data} 
            isLoading={this.props.matches.isFetching}
            divisionId={this.props.params.divisionId} />;
    }
}

MatchesContainer.propTypes = {
    getMatches: PropTypes.func.isRequired,
    matches: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        matches: state.matches.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getMatches: (divisionId) => {
            dispatch(Actions.get(divisionId));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(MatchesContainer);