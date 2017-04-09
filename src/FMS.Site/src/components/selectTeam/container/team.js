import React, { Component, PropTypes } from "react";
import Team from "../presentation/team";
import { connect } from "react-redux";
import * as Actions from  "../../../actionCreators/teamActionCreator";
import { INDEX } from "../../../constants/urlConstants";


class TeamContainer extends Component {

    _chooseTeam = () => {
        this.props.chooseTeam(this.props.team);
    }

    render() {
        return <Team team={this.props.team} onSelect={this._chooseTeam} />;
    }
}

TeamContainer.propTypes = {
    team: PropTypes.object.isRequired,
    chooseTeam: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        chooseTeam: state.team.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        chooseTeam: (team) => {
            dispatch(Actions.put(team, INDEX));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TeamContainer);