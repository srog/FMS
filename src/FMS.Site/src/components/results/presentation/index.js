import React, { PropTypes } from "react";
import MatchesTable from "../../matches/presentation/matchesTable";
import Spinner from "../../spinner/presentation";

const Results = ({ matches, isLoading, divisionId }) => {

    return (
        <div>
{divisionId == 0 ? 
                <h1>All Results For Current Week</h1>
                :
                <h1>Result List - Division {divisionId}</h1> 
}
{isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches} />}
        </div>
    );
};

Results.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    divisionId: PropTypes.string
};

export default Results;