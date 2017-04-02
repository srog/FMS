import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import News from "../presentation";

export class NewsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <News news={this.props.news.data} />;
    }
}

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(NewsContainer);