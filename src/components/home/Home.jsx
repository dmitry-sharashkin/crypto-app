import React, {useEffect} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useGetCoinsQuery, useGetCryptosQuery} from '../../services/cryptoApi'
import {Link} from "react-router-dom";
import Cryptocurrencies from "../Cryptocurrencies";
import News from "../News";

const Home = () => {

    const {data, isFetching} = useGetCoinsQuery()
    const dataCoins = data?.data?.coins
    const dataStats = data?.data?.stats
    console.log(dataStats)
    return (
        <Box
            component="main"
            sx={{flexGrow: 1, p: 3,}}
        >
            <Box>
                <Typography variant={"h3"}>
                    Global Crypto Stats
                </Typography>
                <Grid columns={10} sx={{mt: 1}} container spacing={2}>
                    <Grid item xs={5} md={2}>
                        <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total Coins</Typography>
                        <Typography sx={{fontSize: 20}}>{dataStats?.total}</Typography>
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total 24th
                            Volume</Typography>
                        <Typography sx={{fontSize: 20}}>{dataStats?.total24hVolume}</Typography>
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total
                            Exchanges</Typography>
                        <Typography sx={{fontSize: 20}}>{dataStats?.totalExchanges}</Typography>
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total
                            MarketCap</Typography>
                        <Typography sx={{fontSize: 20}}>{dataStats?.totalMarketCap}</Typography>
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total Markets</Typography>
                        <Typography sx={{fontSize: 20}}>{dataStats?.totalMarkets}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{my:6}}>
                <Box>
                    <Typography variant={'h3'}>Top 10 Cryptocurrencies in the world</Typography>
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