import React, { PropTypes } from "react";
import EndOfSeasonTable from "./endOfSeasonTable";
import Spinner from "../../spinner/presentation";
import Button from "../../button/presentation";

const EndSeason = ({ endSeason, isLoading, newSeason }) => {

    return (
        <div>
             <h1>End of Season Info</h1>

            <Button state="success" onClick={newSeason}>Start New Season</Button>
            {isLoading ? <Spinner width={80}/> : <EndOfSeasonTable endSeason={endSeason} />}
        </div>
    );
};

EndSeason.propTypes = {
    endSeason: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    newSeason: PropTypes.func.isRequired
};

export default EndSeason;