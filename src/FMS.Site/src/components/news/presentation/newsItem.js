import React, { PropTypes } from "react";

import Row from "../../table/presentation/row";
import Data from "../../table/presentation/data";

const NewsItem = ({ newsItem }) => {
    return (
        <Row>
            <Data secondary>{newsItem.news}</Data>
        </Row>
    );
};

NewsItem.propTypes = {
    newsItem: PropTypes.object.isRequired
};

export default NewsItem;