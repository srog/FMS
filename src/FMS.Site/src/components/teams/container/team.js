import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import Team from "../presentation/team";
import { TEAM } from "../../../constants/urlConstants";

class TeamContainer extends Component {

    _onSelect = () => {
        browserHistory.push(TEAM({ id: this.props.team.id }));
    }

    render() {
        return <Team team={this.props.team} onSelect={this._onSelect} />;
    }
}

TeamContainer.propTypes = {
    team: PropTypes.object.isRequired
};

export default TeamContainer;