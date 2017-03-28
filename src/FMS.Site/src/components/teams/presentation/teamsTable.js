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
                    <Heading>Team Name</Heading>
                    <Heading>Division</Heading>
                    <Heading>Form</Heading>
                    <Heading>Cash</Heading>
                    <Heading>Overall Rating</Heading>
                    <Heading>Team Rating</Heading>
                    <Heading>GK Rating</Heading>
                    <Heading>Def Rating</Heading>
                    <Heading>Mid Rating</Heading>
                    <Heading>Stk Rating</Heading>
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