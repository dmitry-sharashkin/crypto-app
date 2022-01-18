import React, {useState} from 'react';
import {useGetNewsQuery} from "../../services/cryptoApi";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const News = () => {
    const {data, error, isLoading} = useGetNewsQuery()


    return (
        <div>
            {error ? 'Error' : isLoading ? 'loading...' : data?.content.map((article, index) => {
                return <article key={`${article.title}_${index}`}>
                    <Paper sx={{
                        my: 2,
                        padding: 2,
                        display: 'flex',
                        height: "220px",
                        overflow: "hidden",
                    }}>
                        <Box sx={{
                            overflow: "hidden",
                            width: "25%",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img height={'100%'} src={article.image} alt="img"/>
                        </Box>
                        <Box sx={{
                            width: "75%",
                            pl:"1rem",
                        }}>
                            <Box>
                                <Typography variant='h6' sx={{mt: 0}}>{article.title}</Typography>
                            </Box>
                            <Typography  sx={{color: "secondary.main",height:'100%',overflow:"hidden",boxSizing:"border-box"}}>
                                <div dangerouslySetInnerHTML={{__html: article.content}}/>
                            </Typography>
                        </Box>
                    </Paper>

                </article>
            })}
        </div>
    );
};

export default News;