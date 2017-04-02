import React, { PropTypes } from "react";
import Button from "../../button/presentation";
import News from "../../news/presentation";

const Season = ({ season, viewDivision1, viewDivision2, viewDivision3, viewDivision4, 
                viewFixtures, viewTransferList, advanceWeek, endSeason, viewPlayers, viewTeams, news }) => {
    return (
        <div>
            <h1>Season {season.name}</h1>
            
            <h2>Week: {season.currentWeek}</h2>
            
            <Button onClick={viewDivision1}>Division 1</Button>
            <Button onClick={viewDivision2}>Division 2</Button>
            <Button onClick={viewDivision3}>Division 3</Button>
            <Button onClick={viewDivision4}>Division 4</Button>
            <br/>
            <Button onClick={viewFixtures}>All Fixtures For This Week</Button>
            <br/>
            <Button onClick={viewTeams}>All Teams</Button>
            <br/>
            <Button onClick={viewPlayers}>All Players</Button>
            <br/>
            <Button onClick={viewTransferList}>Transfer List</Button>
            <br/>
            { season.allWeeklyMatchesPlayed == true && season.canAdvanceSeason == false ? 
                <Button onClick={advanceWeek}>Advance Week</Button> : null
            }
            <br/>
            { season.canAdvanceSeason == true ? 
                <Button onClick={endSeason}>END SEASON</Button> : null
            }

            <br/>
            <News news={news} />
        </div>
    );
};

Season.propTypes = {
    season: PropTypes.object.isRequired,
    viewDivision1: PropTypes.func.isRequired,
    viewDivision2: PropTypes.func.isRequired,
    viewDivision3: PropTypes.func.isRequired,
    viewDivision4: PropTypes.func.isRequired,
    viewFixtures: PropTypes.func.isRequired,
    viewTransferList: PropTypes.func.isRequired,
    advanceWeek: PropTypes.func.isRequired,
    viewPlayers: PropTypes.func.isRequired,
    endSeason: PropTypes.func.isRequired,
    viewTeams: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Season;