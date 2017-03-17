import React, { PropTypes } from "react";
import TeamsTable from "../../teams/presentation/teamsTable";
import Spinner from "../../spinner/presentation";

const Division = ({ teams, isLoading, divisionid }) => {

    return (
        <div>
            isLoading ? <Spinner width={80}/> : 
            <TeamsTable teams={teams} />
        </div>
    );
};

Division.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    divisionid: PropTypes.object 
};

export default Division;