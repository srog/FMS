import React, { PropTypes } from "react";
import SelectTeamTable from "./selectTeamTable";
import Spinner from "../../spinner/presentation";

const SelectTeam = ({ teams, isLoading }) => {

    return (
        <div>
            <h1>Select a Team</h1>
    {isLoading ? <Spinner width={80}/> : <SelectTeamTable teams={teams} />}
        </div>
    );
};

SelectTeam.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default SelectTeam;