import React, { PropTypes } from "react";
import MatchesTable from "../../matches/presentation/matchesTable";
import Spinner from "../../spinner/presentation";

const Results = ({ matches, isLoading }) => {

    return (
        <div>
            <h1> Result List</h1>
            {isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches} />}
        </div>
    );
};

Results.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Results;