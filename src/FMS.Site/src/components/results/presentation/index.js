import React, { PropTypes } from "react";
import MatchesTable from "../../matches/presentation/matchesTable";
import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";

const Results = ({ matches, isLoading, divisionId, viewTable }) => {

    return (
        <div>
{divisionId == 0 ? 
                <h1>All Results For Current Week</h1>
                :
                <h1>Result List - Division {divisionId}</h1> 
}
{isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches} />}

            <Button onClick={viewTable}>League Table</Button>

        </div>
    );
};

Results.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewTable: PropTypes.func.isRequired,
    divisionId: PropTypes.string
};

export default Results;