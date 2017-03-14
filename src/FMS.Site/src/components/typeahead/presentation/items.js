import React, { PropTypes } from "react";

import Item from "./item";

const Items = ({ items, searchingText, searching, onSelect }) => {

    return searching
        ? <div>{searchingText}</div>
        : <div> {items.map(item => <Item key={item.id} item={item} onSelect={onSelect}/>)}</div>;
};

Items.propTypes = {
    items: PropTypes.array.isRequired,
    searchingText: PropTypes.string,
    searching: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

Items.defaultProps = {
    searchingText: "Searching...."
};

export default Items;