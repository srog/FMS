import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/teamsActionCreator";
import Teams from "../presentation";


export class TeamsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        return <Teams all teams={this.props.teams.data} isLoading={this.props.teams.isFetching} />;
    }
}

TeamsContainer.propTypes = {
    getTeams: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        teams: state.teams.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getTeams: () => {
            dispatch(Actions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamsContainer);