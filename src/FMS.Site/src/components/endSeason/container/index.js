import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import * as Actions from  "../../../actionCreators/endSeasonActionCreator";
import EndSeason from "../presentation";
import { SEASON } from "../../../constants/urlConstants";

export class EndSeasonContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getEndSeason();
    }


    _newSeason = (event) => {
        event.preventDefault();
        browserHistory.push(SEASON());
    }

    render() {
        return <EndSeason 
            endSeason={this.props.endSeason.data}
            newSeason={this._newSeason}
            isLoading={this.props.endSeason.isFetching} />;
    }
}

EndSeasonContainer.propTypes = {
    getEndSeason: PropTypes.func.isRequired,
    endSeason: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        endSeason: state.endSeason.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getEndSeason: () => {
            dispatch(Actions.get());
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(EndSeasonContainer);