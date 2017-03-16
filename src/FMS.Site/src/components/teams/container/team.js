import React, { Component, PropTypes } from "react";

import Team from "../presentation/team";

class TeamContainer extends Component {


    render() {
        return <Team team={this.props.team} />;
    }
}

TeamContainer.propTypes = {
    team: PropTypes.object.isRequired
};

export default TeamContainer;