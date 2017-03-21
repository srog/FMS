import React, { Component, PropTypes } from "react";
import TeamStats from "../presentation/teamstats";
import { browserHistory } from "react-router";

class TeamStatsContainer extends Component {

    _onSelect = () => {
        browserHistory.push(`/team/${this.props.teamstats.id}`);
    }

    render() {
        return <TeamStats teamstats={this.props.teamstats} onSelect={this._onSelect} />;
    }
}

TeamStatsContainer.propTypes = {
    teamstats: PropTypes.object.isRequired
};

export default TeamStatsContainer;