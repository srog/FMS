import React, { PropTypes } from "react";

const Item = ({ item, onSelect }) => {

    const onClick = () => onSelect(item);

    return (
        <li onClick={onClick}><a>{item.name}</a></li>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Item;