import React, { PropTypes } from "react";
import TeamStatsTable from "../../teamstats/presentation/teamstatsTable";
import Spinner from "../../spinner/presentation";

const Division = ({ teamstats, isLoading, divisionid }) => {

    return (
        <div>
            isLoading ? <Spinner width={80}/> : 
            <TeamStatsTable teamstats={teamstats} />
        </div>
    );
};

Division.propTypes = {
    teamstats: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    divisionid: PropTypes.object 
};

export default Division;