import React, { PropTypes } from "react";
import MatchesTable from "./matchesTable";
import Spinner from "../../spinner/presentation";

const Matches = ({ matches, isLoading }) => {

    return (
        <div>
            <h1>Match List</h1>
                {isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches} />}
        </div>
    );
};

Matches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Matches;