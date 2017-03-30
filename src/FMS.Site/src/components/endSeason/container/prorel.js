import React, { Component, PropTypes } from "react";
import ProRel from "../presentation/prorel";

class ProRelContainer extends Component {

    render() {
        return <ProRel prorel={this.props.prorel} />;
    }
}

ProRelContainer.propTypes = {
    prorel: PropTypes.object.isRequired
};

export default ProRelContainer;