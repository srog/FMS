import React, { PropTypes } from "react";
import PlayersTable from "./playersTable";
import Spinner from "../../spinner/presentation";

const Players = ({ players, isLoading, all }) => {

    return (
        <div>
            <h1>{ all ? "All" : ""} Player List</h1>
            {isLoading ? <Spinner width={80}/> : <PlayersTable players={players} />}
        </div>
    );
};

Players.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    all: PropTypes.bool
};

export default Players;