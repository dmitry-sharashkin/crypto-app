import React from 'react';
import {useGetNewsQuery} from "../services/cryptoApi";
import Box from "@mui/material/Box";

const News = () => {
    const {data, isFetching} = useGetNewsQuery()
    console.log(data)


    return (
        <div>
            {data && data?.content.map((article, index) => {
                return <article key={`${article.title}_${index}`}>
                    <h3>{article.title}</h3>
                    <Box>
                        <img src={article.image} alt="img"/>
                    </Box>
                    {article.content}
                </article>
            })}
        </div>
    );
};

export default News;