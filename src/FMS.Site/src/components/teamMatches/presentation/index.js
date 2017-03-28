import React, { PropTypes } from "react";
import MatchesTable from "../../matches/presentation/matchesTable";
import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";

const TeamMatches = ({ matches, isLoading, viewTable }) => {

    return (
        <div>
                <h1>All Matches For Team</h1>
    {isLoading ? <Spinner width={80}/> : <MatchesTable matches={matches}  />}
        <Button onClick={viewTable}>League Table</Button>

    </div>
    );
};

TeamMatches.propTypes = {
    matches: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewTable: PropTypes.func.isRequired
};

export default TeamMatches;