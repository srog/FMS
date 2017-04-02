import React, { PropTypes } from "react";

import Table from "../../table/presentation";
import Head from "../../table/presentation/head";
import Heading from "../../table/presentation/heading";
import Body from "../../table/presentation/body";
import Row from "../../table/presentation/row";
import NewsItemContainer from "../container/newsItem";

const NewsTable = ({ news }) => {

    const newsItemElements = news.map(newsItem => <NewsItemContainer key={newsItem.id} newsItem={newsItem} />);
    
    return (
        <Table compact>
            <Head>
                <Row>
                    <Heading>Latest News</Heading>
                </Row>
            </Head>
            <Body>
                {newsItemElements}
            </Body>
        </Table>
    );
};

NewsTable.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NewsTable;