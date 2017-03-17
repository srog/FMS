import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import * as Actions from  "../../../actionCreators/divisionActionCreator";
import Teams from "../../teams/presentation";


export class DivisionContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDivision(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h2>Division {this.props.params.id}</h2>
                
                <Teams teams={this.props.division.data} isLoading={this.props.division.isFetching} />
            </div>
        );
    }
}

DivisionContainer.propTypes = {
    getDivision: PropTypes.func.isRequired,
    division: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        division: state.division.toJS()
    };
};

const mapActionCreatorsToProps = (dispatch) => {
    return {
        getDivision: (id) => {
            dispatch(Actions.get(id));
        }
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(DivisionContainer);