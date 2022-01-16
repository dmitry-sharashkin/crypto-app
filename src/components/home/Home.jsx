import React, {useEffect} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Cryptocurrencies from "../Cryptocurrencies";
import News from "../News";
import {useGetStatsQuery} from "../../services/cryptoApi";

const Home = () => {

    const {data, isFetching} = useGetStatsQuery()
    console.log(data)

    return (
        <Box
            component="main"
            sx={{flexGrow: 1, p: 3,}}
        >
            <Box>
                <Typography variant={"h3"}>
                    Stock Market Sectors Performance
                </Typography>
                <Grid columns={10} sx={{mt: 1}} container spacing={2}>
                    <Grid item xs={5} md={2}>
                        <Typography sx={{fontSize: 20}}>{data && data[0]?.sector}</Typography>
                        <Typography sx={{fontSize: 20}}>{data && data[0]?.changesPercentage}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{my:6}}>
                <Box>
                    <Typography variant={'h3'}>Top 10 Shares in the world</Typography>
                    <Link to='/crypto-app/cryptocurrencies'>Show More</Link>
                </Box>
                <Cryptocurrencies simplified />

            </Box>
            <Box sx={{my:6}}>
                <Box>
                    <Typography variant={'h3'}>Latest Crypto News</Typography>
                    <Link to='/crypto-app/news'><Typography variant={'a'}>Show More</Typography></Link>
                </Box>
                <News simplified />
            </Box>



        </Box>
    );
};

export default Home;