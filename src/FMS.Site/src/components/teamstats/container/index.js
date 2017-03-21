import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as Actions from  "../../../actionCreators/teamstatsActionCreator";
import TeamStats from "../presentation";


export class TeamStatsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTeamstats();
    }

    render() {
        return <TeamStats 
            teamstats={this.props.teamstats.data} 
            isLoading={this.props.teamstats.isFetching}
            onSelect={this._onSelect} />;
    }
}

TeamStatsContainer.propTypes = {
    getTeamstats: PropTypes.func.isRequired,
    teamstats: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        teamstats: state.teamstats.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getTeamstats: () => {
            dispatch(Actions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamStatsContainer);