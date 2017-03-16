import React, { PropTypes } from "react";
import { Link } from "react-router";

import TeamsTable from "./teamsTable";
import Spinner from "../../spinner/presentation";

const Teams = ({ teams, isLoading }) => {

    return (
        <div>
            <Link to="/">Back to Main Menu</Link>
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