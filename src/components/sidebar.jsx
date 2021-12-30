import React from 'react';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from '@mui/icons-material/Home';
import appLogo from '../assets/cryptocurrency.png'
import Typography from "@mui/material/Typography";
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';


const Sidebar = ({drawerWidth}) => {
    return (<>
            <CssBaseline/>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },

                }}
                variant="permanent"
                anchor="left"
            >
                <List >
                    <ListItem  sx={{my:2}}>
                        <img style={{width:"70px"}} src={appLogo} alt="app logo"/>
                        <Typography component='h1' variant='h6'  sx={{ml:2,  }}>Crypto app</Typography>
                    </ListItem>



                    <ListItem button >
                        <ListItemIcon >
                           <HomeOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon >
                           <EqualizerOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Cryptocurrencies"}/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon >
                           <CurrencyExchangeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Exchanges"}/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon >
                           <ArticleOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"News"}/>
                    </ListItem>

                </List>

            </Drawer>
        </>

    )
};

export default Sidebar