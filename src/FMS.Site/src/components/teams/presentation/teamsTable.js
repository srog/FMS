import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import TeamContainer from "../container/team";

const TeamsTable = ({ teams }) => {

    const teamElements = teams.map(team => <TeamContainer key={team.id} team={team} />);

    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Ranking</Heading>
                    <Heading>Team Name</Heading>
                    <Heading>Rating</Heading>
                    <Heading>Division</Heading>
                    <Heading>Position</Heading>
                    <Heading>Cash</Heading>
                </Row>
            </Head>
            <Body>
                {teamElements}
            </Body>
        </Table>
    );
};

TeamsTable.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TeamsTable;