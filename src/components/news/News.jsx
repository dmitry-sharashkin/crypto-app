import React from 'react';
import {useGetNewsQuery} from "../../services/cryptoApi";
import Box from "@mui/material/Box";

const News = () => {
    const {data,error, isLoading} = useGetNewsQuery()


    return (
        <div>
            {error?'Error':isLoading ? 'loading...' : data?.content.map((article, index) => {
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