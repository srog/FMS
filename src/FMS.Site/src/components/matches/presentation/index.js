import React, { PropTypes } from "react";
import MatchesTable from "./matchesTable";
import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";

const Matches = ({ matches, isLoading, divisionId, playAllMatches }) => {

    return (
        <div>
            {divisionId == 0 ? 
                <h1>All Matches For Current Week</h1>
                :
                <h1>Match List - Division {divisionId}</h1> 
            }
            <Button state="success" onClick={playAllMatches}>Play All Remaining Matches</Button>
            {isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches} />}
        </div>
    );
};

Matches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    divisionId: PropTypes.object,
    playAllMatches: PropTypes.func.isRequired
};

export default Matches;