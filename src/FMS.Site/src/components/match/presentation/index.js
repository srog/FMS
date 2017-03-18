import React, { PropTypes } from "react";

import Spinner from "../../spinner/presentation";
import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Body from "../../table/presentation/body";
import TableRow from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const Match = ({ match, isLoading }) => {
    return (
        <div>
            <h1>Match</h1>
            <h2>Season: {match.seasonId}</h2>
            <h2>  Week: {match.weekId}</h2>
            <br/>
            <h3>Match Id: {match.id}</h3>
            <br/>
    {isLoading 
        ? <Spinner width={80} />
        :
            <Table>
            <Head>
                
            </Head>
                <Body>
                    <TableRow>
                        <Data>Home Team</Data>
                        <Data secondary>{match.homeTeam}</Data>
                        <Data secondary>{match.homeTeamScore}</Data>
                    </TableRow>
                    <TableRow>
                        <Data>Away Team</Data>
                        <Data secondary>{match.awayTeam}</Data>
                        <Data secondary>{match.awayTeamScore}</Data>    
                    </TableRow>
                </Body>
            </Table>

}
    </div>
    );
};

Match.propTypes = {
    match: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Match;