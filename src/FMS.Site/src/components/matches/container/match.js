import React, { Component, PropTypes } from "react";
import Match from "../presentation/match";
import { browserHistory } from "react-router";
import { MATCH } from "../../../constants/urlConstants";

class MatchContainer extends Component {

    render() {
        return <Match 
            match={this.props.match}
            playMatch={this._playMatch} />;
    }

    _playMatch = (event) => {
        event.preventDefault();
        browserHistory.push(MATCH({ id: this.props.match.id }));
    }

}

MatchContainer.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchContainer;