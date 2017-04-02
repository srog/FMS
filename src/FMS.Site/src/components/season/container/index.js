import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import * as NewsActions from  "../../../actionCreators/newsActionCreator";
import * as Actions from  "../../../actionCreators/seasonActionCreator";
import Season from "../presentation";
import { PLAYERS, TEAMS, MATCHES, DIVISION, ENDSEASON } from "../../../constants/urlConstants";

export class SeasonContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSeason();
        this.props.getNews();
    }

    _viewDivision1 = (event) => {
        event.preventDefault();
        browserHistory.push(DIVISION({ id: 1 }));
    }

    _viewDivision2 = (event) => {
        event.preventDefault();
        browserHistory.push(DIVISION({ id: 2 }));
    }

    _viewDivision3 = (event) => {
        event.preventDefault();
        browserHistory.push(DIVISION({ id: 3 }));
    }

    _viewDivision4 = (event) => {
        event.preventDefault();
        browserHistory.push(DIVISION({ id: 4 }));
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
            viewDivision1={this._viewDivision1}
            viewDivision2={this._viewDivision2}
            viewDivision3={this._viewDivision3}
            viewDivision4={this._viewDivision4}
            viewFixtures={this._viewFixtures}
            viewPlayers={this._viewPlayers}
            viewTeams={this._viewTeams}
            viewTransferList={this._viewTransferList}
            advanceWeek={this._advanceWeek}
            endSeason={this._endSeason}
            isLoading={this.props.season.isFetching} 
            news={this.props.news.data} />;
    }
}

SeasonContainer.propTypes = {
    getSeason: PropTypes.func.isRequired,
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