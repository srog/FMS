import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import * as Actions from  "../../../actionCreators/teamActionCreator";
import Team from "../presentation";


export class TeamContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTeam(this.props.params.id);
    }

    _viewSquad = (event) => {
        event.preventDefault();
        browserHistory.push(`/squad/${this.props.params.id}`);
    }

    render() {
        return <Team 
            team={this.props.team.data} 
            viewSquad={this._viewSquad}
            isLoading={this.props.team.isFetching} />;
    }
}

TeamContainer.propTypes = {
    getTeam: PropTypes.func.isRequired,
    team: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        team: state.team.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getTeam: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamContainer);