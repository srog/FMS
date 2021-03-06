﻿import React, { PropTypes } from "react";

const TableHead = ({ children }) => {
    return (
        <thead>
            {children}
        </thead>
    );
};

TableHead.propTypes = {
    children: PropTypes.element
};

export default TableHead;