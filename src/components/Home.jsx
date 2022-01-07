import React, {useEffect} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {change} from "../redux/globalStatsSlice";

const Home = () => {
    const stats = useSelector((state) => state.stats)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(change())
    },[])
    console.log(stats)
    return (
        <Box
            component="main"
            sx={{flexGrow: 1, p: 3,}}
        >
            <Typography variant={"h3"}>
                Global Crypto Stats
            </Typography>
            <Grid columns={10} sx={{mt: 1}} container spacing={2}>
                <Grid item xs={5} md={2}>
                    <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total Coins</Typography>
                    <Typography sx={{fontSize: 20}}>{stats.totalCoins}</Typography>
                </Grid>
                <Grid item xs={5} md={2}>
                    <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total 24th
                        Volume</Typography>
                    <Typography sx={{fontSize: 20}}>{stats.total24hVolume}</Typography>
                </Grid>
                <Grid item xs={5} md={2}>
                    <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total
                        Exchanges</Typography>
                    <Typography sx={{fontSize: 20}}>{stats.totalExchanges}</Typography>
                </Grid>
                <Grid item xs={5} md={2}>
                    <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total
                        MarketCap</Typography>
                    <Typography sx={{fontSize: 20}}>{stats.totalMarketCap}</Typography>
                </Grid>
                <Grid item xs={5} md={2}>
                    <Typography variant="caption" gutterBottom sx={{color: 'text.secondary'}}>Total Markets</Typography>
                    <Typography sx={{fontSize: 20}}>{stats.totalMarkets}</Typography>
                </Grid>
            </Grid>


        </Box>
    );
};

export default Home;