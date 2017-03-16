import React, { PropTypes } from "react";

import TeamsTable from "./teamsTable";
import Spinner from "../../spinner/presentation";

const Teams = ({ teams, isLoading }) => {

    return (
        <div>
            <h1>Teams</h1>
    {isLoading ? <Spinner width={80}/> : <TeamsTable teams={teams} />}
        </div>
    );
};

Teams.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Teams;