import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/resultsActionCreator";
import Results from "../presentation";


export class ResultsContainer extends Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        this.props.getResults(this.props.params.divisionId);
    }

    render() {
        return <Results 
            matches={this.props.matches.data} 
            divisionId={this.props.params.divisionId}
            isLoading={this.props.matches.isFetching} />;
    }
}

ResultsContainer.propTypes = {
    getResults: PropTypes.func.isRequired,
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
        getResults: (divisionId) => {
            dispatch(Actions.get(divisionId));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(ResultsContainer);