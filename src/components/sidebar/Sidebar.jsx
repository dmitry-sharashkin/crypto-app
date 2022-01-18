import React from 'react';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from '@mui/icons-material/Home';
import appLogo from '../../assets/cryptocurrency.png'
import Typography from "@mui/material/Typography";
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import {Link} from "react-router-dom";

const Sidebar = ({drawerWidth}) => {
    return (<>
            <CssBaseline/>
            <Drawer
                sx={{
                    width:  `${drawerWidth}px`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                        boxSizing: 'border-box',
                    },

                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <Link to='crypto-app'>
                        <ListItem sx={{my: 2}}>
                            <img style={{width: "70px"}} src={appLogo} alt="app logo"/>
                            <Typography component='h1' variant='h6' sx={{ml: 2, }}>Crypto app</Typography>
                        </ListItem>
                    </Link>
                    <Link to="crypto-app">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText   primary={"Home"}/>
                        </ListItem>
                    </Link>

                    <Link to="crypto-app/cryptocurrencies">
                        <ListItem button>
                            <ListItemIcon>
                                <EqualizerOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText  primary={"Stocks "}/>
                        </ListItem>
                    </Link>

                    <Link to="crypto-app/exchanges">
                        <ListItem button>
                            <ListItemIcon>
                                <CurrencyExchangeOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Exchanges'> </ListItemText>
                        </ListItem>
                    </Link>

                    <Link to="crypto-app/news">
                        <ListItem button>
                            <ListItemIcon>
                                <ArticleOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"News"}/>
                        </ListItem>
                    </Link>

                </List>

            </Drawer>
        </>

    )
};

export default Sidebar