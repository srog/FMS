import React, { Component, PropTypes } from "react";
import Match from "../presentation/match";

class MatchContainer extends Component {

    render() {
        return <Match match={this.props.match} />;
    }
}

MatchContainer.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchContainer;