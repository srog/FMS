import React, { Component, PropTypes } from "react";

import MatchEvent from "../presentation/matchevent";

class MatchEventContainer extends Component {

    render() {
        return <MatchEvent matchevent={this.props.matchevent} />;
    }
}

MatchEventContainer.propTypes = {
    matchevent: PropTypes.object.isRequired
};

export default MatchEventContainer;