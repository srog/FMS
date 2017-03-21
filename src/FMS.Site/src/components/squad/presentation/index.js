import React, { PropTypes } from "react";
import PlayersTable from "../../players/presentation/playersTable";
import Spinner from "../../spinner/presentation";

const Squad = ({ players, isLoading, teamid }) => {

    return (
        <div>
            {teamid == 0 ?
                <h1> Transfer List</h1>
                :
                <h1> Squad List</h1>
            }
            {isLoading ? <Spinner width={80}/> : <PlayersTable players={players} />}
        </div>
    );
};

Squad.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    teamid: PropTypes.object.isRequired
};

export default Squad;