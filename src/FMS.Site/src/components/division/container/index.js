import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as Actions from  "../../../actionCreators/divisionActionCreator";
import Division from "../presentation";

export class DivisionContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDivision(this.props.params.id);
    }

    _viewFixtures = (event) => {
        event.preventDefault();
        browserHistory.push(`/matches/${this.props.params.id}`);
    }

    render() {
        return <Division 
            division={this.props.params.id}
            teamstats={this.props.division.data} 
            viewFixtures={this._viewFixtures}
            isLoading={this.props.division.isFetching} />;
    }
}

DivisionContainer.propTypes = {
    getDivision: PropTypes.func.isRequired,
    division: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        division: state.division.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getDivision: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(DivisionContainer);