import React, { Component, PropTypes } from "react";
import NewsItem from "../presentation/newsItem";

class NewsItemContainer extends Component {
    
    render() {
        return <NewsItem newsItem={this.props.newsItem} />;
    }
}

NewsItemContainer.propTypes = {
    newsItem: PropTypes.object.isRequired
};

export default NewsItemContainer;