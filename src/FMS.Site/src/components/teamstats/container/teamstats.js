import React, { Component, PropTypes } from "react";
import TeamStats from "../presentation/teamstats";

class TeamStatsContainer extends Component {

    render() {
        return <TeamStats teamstats={this.props.teamstats} />;
    }
}

TeamStatsContainer.propTypes = {
    teamstats: PropTypes.object.isRequired
};

export default TeamStatsContainer;