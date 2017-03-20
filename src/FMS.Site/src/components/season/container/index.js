import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as Actions from  "../../../actionCreators/seasonActionCreator";
import Season from "../presentation";


export class SeasonContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSeason();
    }

    _viewDivision1 = (event) => {
        event.preventDefault();
        browserHistory.push("/division/1");
    }

    _viewDivision2 = (event) => {
        event.preventDefault();
        browserHistory.push("/division/2");
    }

    _viewFixtures = (event) => {
        event.preventDefault();
        browserHistory.push("/matches/0");
    }

    render() {
        return <Season 
            season={this.props.season.data} 
            viewDivision1={this._viewDivision1}
            viewDivision2={this._viewDivision2}
            viewFixtures={this._viewFixtures}
            isLoading={this.props.season.isFetching} />;
    }
}

SeasonContainer.propTypes = {
    getSeason: PropTypes.func.isRequired,
    season: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        season: state.season.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getSeason: () => {
            dispatch(Actions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(SeasonContainer);