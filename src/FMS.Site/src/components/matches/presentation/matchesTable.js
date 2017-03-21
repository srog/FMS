import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import MatchContainer from "../container/match";

const MatchesTable = ({ matches }) => {

    const matchElements = matches.map(match => <MatchContainer key={match.id} match={match} />);
    
    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Match Id</Heading>
                    <Heading>Home Team</Heading>
                    <Heading>Away Team</Heading>
                    <Heading>Home Score</Heading>
                    <Heading>Away Score</Heading>
                    <Heading>Completed</Heading>
                    <Heading></Heading>
                </Row>
            </Head>
            <Body>
                {matchElements}
            </Body>
        </Table>
    );
};

MatchesTable.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MatchesTable;