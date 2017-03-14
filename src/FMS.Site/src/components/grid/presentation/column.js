import "../styles/column.scss";

import React, { PropTypes } from "react";

const Column = ({ children, size, alignRight }) => {

    const modifiers = alignRight
            ? `column-${size}--align-right`
            : "";

    return (
        <div className={`column-${size} ${modifiers}`}>
            {children}
        </div>
    );
};

Column.defaultProps = {
    alignRight: false
};

Column.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number.isRequired,
    alignRight: PropTypes.bool
};

export default Column;