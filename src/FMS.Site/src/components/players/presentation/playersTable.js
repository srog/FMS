import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import PlayerContainer from "../container/player";

const PlayersTable = ({ players, squad }) => {

    const playerElements = players.map(player => <PlayerContainer key={player.id} player={player} squad={squad} />);
    
    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Name</Heading>
                    { squad=="true" ? null : <Heading>Team</Heading> }
                    <Heading>Age</Heading>
                    <Heading>Position</Heading>
                    <Heading>Rating</Heading>
                    <Heading>Contract</Heading>
                    <Heading>Value</Heading>
                    <Heading>Goals</Heading>
                    <Heading>Assists</Heading>
                    <Heading>Apps</Heading>
                    <Heading>Red Cards</Heading>
                    <Heading>Selected</Heading>
                 </Row>
            </Head>
            <Body>
                {playerElements}
            </Body>
        </Table>
    );
};

PlayersTable.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    squad: PropTypes.string
};

export default PlayersTable;