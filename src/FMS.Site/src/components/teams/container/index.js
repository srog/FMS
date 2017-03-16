import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import * as Actions from  "../../../actionCreators/teamsActionCreator";
import Teams from "../presentation";


export class TeamsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTeams(this.props.params.id);
    }

    render() {
        return <Teams teams={this.props.teams.data} isLoading={this.props.teams.isFetching} />;
    }
}

TeamsContainer.propTypes = {
    getTeams: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        teams: state.teams.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getTeams: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamsContainer);