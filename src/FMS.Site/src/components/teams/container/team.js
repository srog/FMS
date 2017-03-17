import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import Team from "../presentation/team";

class TeamContainer extends Component {

    _onSelect = () => {
        browserHistory.push(`/team/${this.props.team.id}`);
    }

    render() {
        return <Team team={this.props.team} onSelect={this._onSelect} />;
    }
}

TeamContainer.propTypes = {
    team: PropTypes.object.isRequired
};

export default TeamContainer;