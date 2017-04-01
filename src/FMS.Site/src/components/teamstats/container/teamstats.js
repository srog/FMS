import React, { Component, PropTypes } from "react";
import TeamStats from "../presentation/teamstats";
import { browserHistory } from "react-router";
import { TEAM } from "../../../constants/urlConstants";

class TeamStatsContainer extends Component {

    _onSelect = () => {
        browserHistory.push(TEAM({ id: this.props.teamstats.teamId }));
    }

    render() {
        return <TeamStats teamstats={this.props.teamstats} onSelect={this._onSelect} />;
    }
}

TeamStatsContainer.propTypes = {
    teamstats: PropTypes.object.isRequired
};

export default TeamStatsContainer;