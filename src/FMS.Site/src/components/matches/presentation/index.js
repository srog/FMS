import React, { PropTypes } from "react";
import MatchesTable from "./matchesTable";
import Spinner from "../../spinner/presentation";

const Matches = ({ matches, isLoading, divisionId }) => {

    return (
        <div>
            {divisionId == 0 ? 
                <h1>All Matches For Current Week</h1>
                :
                <h1>Match List - Division {divisionId}</h1>
            }
            {isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches} />}
        </div>
    );
};

Matches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    divisionId: PropTypes.object.isRequired
};

export default Matches;