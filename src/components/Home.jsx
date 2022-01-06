import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Home = () => {
    return (
        <Box
             component="main"
             sx={{flexGrow: 1, p: 3,}}
        >
            <Typography variant={"h3"}>
                Global Crypto Stats
            </Typography>
            <Grid sx={{mt: 1}} container spacing={2}>
                <Grid item xs={3}>
                    <Typography  variant="caption" gutterBottom sx={{color:'text.secondary'}}>Total Cryptocurrencies</Typography>
                    <Typography sx={{fontSize:20}}>123555</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography  variant="caption" gutterBottom sx={{color:'text.secondary'}}>Total Market Cap</Typography>
                    <Typography sx={{fontSize:20}}>235</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography  variant="caption" gutterBottom sx={{color:'text.secondary'}}>Total Cryptocurrencies</Typography>
                    <Typography sx={{fontSize:20}}>123555</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography  variant="caption" gutterBottom sx={{color:'text.secondary'}}>Total Cryptocurrencies</Typography>
                    <Typography sx={{fontSize:20}}>123555</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography  variant="caption" gutterBottom sx={{color:'text.secondary'}}>Total Cryptocurrencies</Typography>
                    <Typography sx={{fontSize:20}}>123555</Typography>
                </Grid>
            </Grid>


        </Box>
    );
};

export default Home;