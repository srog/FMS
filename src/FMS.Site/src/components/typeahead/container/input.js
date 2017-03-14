import React, { PropTypes, Component } from "react";

import Input from "../presentation/input";

class InputContainer extends Component {

    _timeout = null;

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }

    componentDidUpdate() {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(() => {
            this.props.fetchItems();
        }, this.props.delay);
    }

    render() {
        return (<Input value={this.props.value} updateValue={this.props.updateValue}/>);
    }
}

InputContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired,
    delay: PropTypes.number
};

InputContainer.defaultProps = {
    delay: 300
};

export default InputContainer;