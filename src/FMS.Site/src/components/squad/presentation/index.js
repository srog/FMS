import React, { PropTypes } from "react";
import PlayersTable from "../../players/presentation/playersTable";
import Spinner from "../../spinner/presentation";

const Squad = ({ players, isLoading }) => {

    return (
        <div>
            <h1>Squad</h1>
            {isLoading ? <Spinner width={80}/> : <PlayersTable squad players={players} />}
        </div>
    );
};

Squad.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Squad;