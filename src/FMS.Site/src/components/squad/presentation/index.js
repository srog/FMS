import React, { PropTypes } from "react";
import PlayersTable from "../../players/presentation/playersTable";
import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";

const Squad = ({ players, isLoading, teamid, viewTeam }) => {

    return (
        <div>
            {teamid == "0" ?
                <h1> Transfer List</h1>
                :
                <h1> Squad List</h1>            
            }
            {teamid != "0" ? 
                <Button onClick={viewTeam}>Team Page</Button> 
                : null 
            }
            {isLoading ? <Spinner width={80}/> : <PlayersTable players={players} squad="true" />}
        </div>
    );
};

Squad.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    teamid: PropTypes.string.isRequired,
    viewTeam: PropTypes.func.isRequired
};

export default Squad;