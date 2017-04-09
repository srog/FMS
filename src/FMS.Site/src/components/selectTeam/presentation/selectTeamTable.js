import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import TeamContainer from "../container/team";

const SelectTeamTable = ({ teams }) => {

    const teamElements = teams.map(team => <TeamContainer key={team.id} team={team} />);

    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Team Name</Heading>
                    <Heading>Division</Heading>
                    <Heading>Cash</Heading>
                    <Heading>Overall Rating</Heading>
                </Row>
            </Head>
            <Body>
                {teamElements}
            </Body>
        </Table>
    );
};

SelectTeamTable.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SelectTeamTable;