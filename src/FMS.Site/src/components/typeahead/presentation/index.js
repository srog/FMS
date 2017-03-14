import React, { PropTypes } from "react";

import Input from "../container/input";
import Items from "./items";

const Typeahead = ({ state, items, searching, fetchItems, onSelect, updateValue }) => {
    return (
        <div>
            <Input value={state.value} 
                updateValue={updateValue} 
                fetchItems={fetchItems} />
            {state.displayItems 
                ? <Items 
                    items={items} 
                    searching={searching} 
                    onSelect={onSelect} />
                : null 
            }
        </div>
    );
};

Typeahead.propTypes = {
    state: PropTypes.shape({
        value: PropTypes.string.isRequired,
        displayItems: PropTypes.bool.isRequired
    }),
    items: PropTypes.array.isRequired,
    searching: PropTypes.bool.isRequired,
    fetchItems: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired
};

export default Typeahead;