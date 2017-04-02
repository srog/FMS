import React, { PropTypes } from "react";

import NewsTable from "./newsTable";

const News = ({ news }) => {

    return (
        <div>
            <NewsTable news={news}  />
        </div>
    );
};

News.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default News;