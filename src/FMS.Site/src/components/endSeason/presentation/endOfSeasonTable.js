import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import ProRelContainer from "../container/prorel";

const EndOfSeasonTable = ({ endSeason }) => {

    const prorelElements = endSeason.map(prorel => <ProRelContainer key={prorel.id} prorel={prorel} />);
    
    return ( 
        <Table>
            <Head>
                <Row>
                    <Heading>Division</Heading>
                    <Heading>Status</Heading>
                    <Heading>Team</Heading>
                </Row>
            </Head>
            <Body>
                {prorelElements}
            </Body>
        </Table>
    );
};

EndOfSeasonTable.propTypes = {
    endSeason: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EndOfSeasonTable;