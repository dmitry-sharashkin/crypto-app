import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Stocks from "../stocks/Stocks";
import News from "../news/News";
import {useGetStatsQuery} from "../../services/cryptoApi";
import Stats from "./stats/stats";

const Home = () => {

    const {data,error, isLoading} = useGetStatsQuery()

    return (
        <Box
            component="main"
            sx={{flexGrow: 1, p: 3,}}
        >
            <Box>
                <Typography variant={"h5"}>
                    Stock Market Sectors Performance
                </Typography>

                {/*debug MAP error*/}

                {error?'Error':isLoading ? 'loading...' : <Grid columns={10} sx={{mt: 1}} container spacing={2}>
                    {data?.map((stats, index) => <Stats key={`${stats.sector}_${index}`} sector={stats.sector}
                                                                changesPercentage={stats.changesPercentage}/>)
                    }
                </Grid>}
            </Box>
            <Box sx={{my: 6}}>
                <Box>
                    <Typography variant={'h3'}>Top 10 Shares in the world</Typography>
                    <Link to='/crypto-app/cryptocurrencies'>Show More</Link>
                </Box>
                <Stocks simplified/>

            </Box>
            <Box sx={{my: 6}}>
                <Box>
                    <Typography variant={'h3'}>Latest Crypto News</Typography>
                    <Link to='/crypto-app/news'><Typography variant={'a'}>Show More</Typography></Link>
                </Box>
                <News simplified/>
            </Box>

        </Box>
    );
};

export default Home;