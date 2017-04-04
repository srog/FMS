import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as NewsActions from  "../../../actionCreators/newsActionCreator";
import * as Actions from  "../../../actionCreators/seasonActionCreator";
import Season from "../presentation";
import { PLAYERS, TEAMS, TEAM, TEAMMATCHES, MATCHES, ENDSEASON } from "../../../constants/urlConstants";

export class SeasonContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getSeason();
        this.props.getNews();
    }
    
    _viewFixtures = (event) => {
        event.preventDefault();
        browserHistory.push(MATCHES({ id: 0 }));
    }

    _viewPlayers = (event) => {
        event.preventDefault();
        browserHistory.push(PLAYERS());
    }

    _viewTeams = (event) => {
        event.preventDefault();
        browserHistory.push(TEAMS());
    }

    _viewPlayersTeam = (event) => {
        event.preventDefault();
        browserHistory.push(TEAM({ id: this.props.season.data.playersTeamId }));
    }

    _viewPlayersMatches = (event) => {
        event.preventDefault();
        browserHistory.push(TEAMMATCHES({ id: this.props.season.data.playersTeamId }));
    }

    _viewTransferList = (event) => {
        event.preventDefault();
        browserHistory.push("/squad/0");
    }

    _advanceWeek = () => {
        this.props.advanceWeek(this.props.season);
        browserHistory.push("/matches/0");
    }

    _endSeason = () => {
        event.preventDefault();
        browserHistory.push(ENDSEASON());
    }

    render() {
        return <Season 
            season={this.props.season.data} 
            viewFixtures={this._viewFixtures}
            viewPlayers={this._viewPlayers}
            viewTeams={this._viewTeams}
            viewPlayersTeam={this._viewPlayersTeam}
            viewPlayersMatches={this._viewPlayersMatches}
            viewTransferList={this._viewTransferList}
            advanceWeek={this._advanceWeek}
            endSeason={this._endSeason}
            isLoading={this.props.season.isFetching} 
            news={this.props.news.data} />;
    }
}

SeasonContainer.propTypes = {
    getSeason: PropTypes.func.isRequired,
    getNews: PropTypes.func.isRequired,
    season: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    advanceWeek: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        season: state.season.toJS(),
        news: state.news.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getSeason: () => {
            dispatch(Actions.get());
        },
        advanceWeek: (season) => {
            dispatch(Actions.put(season));
        },
        getNews: () => {
            dispatch(NewsActions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(SeasonContainer);