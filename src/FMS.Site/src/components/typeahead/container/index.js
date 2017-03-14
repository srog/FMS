import React, { PropTypes, Component } from "react";

import Typeahead from "../presentation/";

class TypeaheadContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayItems: false,
            value: props.value,
            itemSelected: false
        };
    }

    _fetchItems = () => {
        if (this.state.value.length >= this.props.minChars && !this.state.itemSelected) {
            this.props.fetchItems(this.state.value);
            this.setState({ displayItems: true });
        } else {
            this.setState({ displayItems: false });
        }
    }

    _selectItem = (item) => {
        this.setState({ value: item.name, itemSelected: true });
        this.props.onSelect(item);
    }

    _updateValue = (event) => {
        this.setState({ value: event.target.value, itemSelected: false });
    }

    render() {
        return (
            <Typeahead 
                state={this.state}
                items={this.props.items}
                searching={this.props.searching}
                fetchItems={this._fetchItems}
                onSelect={this._selectItem}
                updateValue={this._updateValue}/>
        );
    }
}

TypeaheadContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    searching: PropTypes.bool.isRequired,
    value: PropTypes.string,
    minChars: PropTypes.number.isRequired
};

TypeaheadContainer.defaultProps = {
    value: "",
    minChars: 3
};

export default TypeaheadContainer;