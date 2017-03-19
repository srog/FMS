import React, { PropTypes } from "react";
import TeamStatsTable from "./teamstatsTable";
import Spinner from "../../spinner/presentation";

const TeamStats = ({ teamstats, isLoading }) => {

    return (
        <div>
            <h1>Teams</h1>
                {isLoading ? <Spinner width={80}/> : <TeamStatsTable teamstats={teamstats} />}
        </div>
    );
};

TeamStats.propTypes = {
    teamstats: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    all: PropTypes.bool
};

export default TeamStats;