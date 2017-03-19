import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import PlayerContainer from "../container/player";

const PlayersTable = ({ players }) => {

    const playerElements = players.map(player => <PlayerContainer key={player.id} player={player} />);
    
    return (
        <Table>
            <Head>
                <Row>
                    <Heading>Id</Heading>
                    <Heading>Name</Heading>
                    <Heading>Age</Heading>
                    <Heading>Team</Heading>
                    <Heading>Position</Heading>
                    <Heading>Rating</Heading>
                    <Heading>Value</Heading>
                </Row>
            </Head>
            <Body>
                {playerElements}
            </Body>
        </Table>
    );
};

PlayersTable.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PlayersTable;