import React, { PropTypes } from "react";
import Button from "../../button/presentation";

const Season = ({ season, viewDivision1, viewDivision2, viewFixtures, viewTransferList, advanceWeek }) => {
    return (
        <div>
            <h1>Season {season.name}</h1>
            
            <h2>Season Id: {season.id}</h2>
            <h2>Week: {season.currentWeek}</h2>
            
            <Button onClick={viewDivision1}>Division 1</Button>
            <Button onClick={viewDivision2}>Division 2</Button>
            <br/>
            <Button onClick={viewFixtures}>All Fixtures For This Week</Button>
            <br/>
            <Button onClick={viewTransferList}>Transfer List</Button>
            <br/>
            { season.allWeeklyMatchesPlayed == true ? 
                <Button onClick={advanceWeek}>Advance Week</Button> : null
            }
        </div>
    );
};

Season.propTypes = {
    season: PropTypes.object.isRequired,
    viewDivision1: PropTypes.func.isRequired,
    viewDivision2: PropTypes.func.isRequired,
    viewFixtures: PropTypes.func.isRequired,
    viewTransferList: PropTypes.func.isRequired,
    advanceWeek: PropTypes.func.isRequired
};

export default Season;