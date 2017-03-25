import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const MatchEvent = ({ matchevent }) => {
    return (
        <Row>
            <Data>{matchevent.eventDescription}</Data>
            <Data>{matchevent.player + " - " + matchevent.team + " (" + matchevent.minute + ")"}</Data>
        </Row>
    );
};

MatchEvent.propTypes = {
    matchevent: PropTypes.object.isRequired
};

export default MatchEvent;