import React, { PropTypes } from "react";
import Button from "../../button/presentation";

const Season = ({ season, viewDivision1, viewDivision2 }) => {
    return (
        <div>
            <h1>{season.name}</h1>
            <h2>Season Id: {season.id}</h2>
            <h2>Week: {season.currentWeek}</h2>
            
            <Button onClick={viewDivision1}>Division 1</Button>
            <Button onClick={viewDivision2}>Division 2</Button>
        </div>
    );
};

Season.propTypes = {
    season: PropTypes.object.isRequired,
    viewDivision1: PropTypes.func.isRequired,
    viewDivision2: PropTypes.func.isRequired
};

export default Season;