import React, { PropTypes } from "react";
import Button from "../../button/presentation";
import News from "../../news/presentation";

const Season = ({ season, viewPlayersTeam, viewPlayersMatches,
                viewFixtures, viewTransferList, advanceWeek, endSeason, viewPlayers, viewTeams, news }) => {
    return (
        <div>
            <h1>Season {season.name}</h1>
            
            <h2>Week: {season.currentWeek}</h2>
            
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
            { season.playersTeamId != 0 ? 
            <div><h2>Your Team : {season.playersTeam}   {season.playersTeamDetail} </h2>
            <br/>    
            <Button onClick={viewPlayersTeam}>View Team Page</Button> 
            <Button onClick={viewPlayersMatches}>View Matches</Button> </div>  : null
            }
            
            <br/>
            <News news={news} />
        </div>
    );
};

Season.propTypes = {
    season: PropTypes.object.isRequired,
    viewFixtures: PropTypes.func.isRequired,
    viewTransferList: PropTypes.func.isRequired,
    advanceWeek: PropTypes.func.isRequired,
    viewPlayers: PropTypes.func.isRequired,
    endSeason: PropTypes.func.isRequired,
    viewTeams: PropTypes.func.isRequired,
    viewPlayersTeam: PropTypes.func.isRequired,
    viewPlayersMatches: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Season;