import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Stats = ({changesPercentage, sector}) => {
    const [color, setColor] = useState('#fff')
    useEffect(() => {
        setColor(changesPercentage.includes('-') ? 'error.main' : 'success.main');
    }, [changesPercentage])
    return (
        <Grid item xs={5} md={2}>
            <Typography sx={{fontSize: 15}}>{sector}</Typography>
            <Typography sx={{fontSize: 15, color: color}}>{changesPercentage}</Typography>
        </Grid>
    );
};

export default Stats;