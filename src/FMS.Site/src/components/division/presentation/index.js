import React, { PropTypes } from "react";
import TeamStatsTable from "../../teamstats/presentation/teamstatsTable";
import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";


const Division = ({ teamstats, isLoading, viewFixtures, division }) => {

    return (
        <div>
            <h2>Division {division}</h2> 
        
            {
                isLoading ? <Spinner width={80}/> : 
                    <div>
                        <Button onClick={viewFixtures}>This Weeks Matches</Button> 
                        <TeamStatsTable teamstats = {teamstats} /> 
                    </div>
            }
        </div>
    );
};

Division.propTypes = {
    teamstats: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    viewFixtures: PropTypes.func.isRequired,
    division: PropTypes.string.isRequired
};

export default Division;