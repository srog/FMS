import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import MatchEventContainer from "../container/matchevent";

const MatchEventsTable = ({ matchevents }) => {

    const matcheventsElements = matchevents.map(matchevent => <MatchEventContainer key={matchevent.id} matchevent={matchevent} />);

    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Event Name</Heading>
                    <Heading>Event Data</Heading>
                </Row>
            </Head>
            <Body>
                {matcheventsElements}
            </Body>
        </Table>
    );
};

MatchEventsTable.propTypes = {
    matchevents: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MatchEventsTable;