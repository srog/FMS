import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import TeamStatsContainer from "../container/teamstats";

const TeamStatsTable = ({ teamstats }) => {

    const teamstatsElements = teamstats.map(teamstats => <TeamStatsContainer key={teamstats.id} teamstats={teamstats} />);

    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Pos</Heading>
                    <Heading secondary>Team Name</Heading>
                    <Heading>Played</Heading>
                    <Heading>Won</Heading>
                    <Heading>Drawn</Heading>
                    <Heading>Lost</Heading>
                    <Heading>Gls For</Heading>
                    <Heading>Gls Ag</Heading>
                    <Heading>Gl Diff</Heading>
                    <Heading>Pts</Heading>
                </Row>
            </Head>
            <Body>
                {teamstatsElements}
            </Body>
        </Table>
    );
};

TeamStatsTable.propTypes = {
    teamstats: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TeamStatsTable;