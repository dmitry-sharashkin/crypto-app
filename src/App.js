import * as React from 'react';
import Box from '@mui/material/Box';
import {ThemeProvider, useTheme, createTheme} from '@mui/material/styles';
import {amber, grey, indigo} from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/sidebar";
import {
    Routes,
    Route, Link,
} from "react-router-dom";
import Home from "./components/Home";
import './index.css'
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails"; 
import Typography from "@mui/material/Typography";


const getDesignTokens = (mode) => ((mode === 'dark') ? {
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === 'dark' && {
                main: amber[500],
            }),
        },
        ...(mode === 'dark' && {
            background: {
                default: "#264462",
                paper: "#001E3C",
            },
        }),
        text: {
            ...(mode === 'dark') && {
                secondary: grey[300]

            },
        },
    },
} : null);

function MyApp() {
    const theme = useTheme();
    const drawerWidth = 270;
    return (<>
            <Box
                sx={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    py: 3,
                    pl: `${drawerWidth}px`
                }}
            >
                <CssBaseline/>
                <Sidebar drawerWidth={drawerWidth}/>
                <Routes>
                    <Route path='crypto-app/home' element={<Home/>}/>
                    <Route path='crypto-app/' element={<Home/>}/>
                    <Route path='crypto-app/cryptocurrencies' element={<Cryptocurrencies/>}/>
                    <Route path='crypto-app/exchanges' element={<Exchanges/>}/>
                    <Route path='crypto-app/crypto/:coinId' element={<CryptoDetails/>}/>
                    <Route path='crypto-app/news' element={<News/>}/>
                </Routes>
                <Box sx={{display: 'flex', justifyContent: "center",flexDirection:"column",alignItems:"center"}} component={'footer'}>
                    <Typography component='h3'> Crypto app  </Typography>
                    <Typography> All rights reserved </Typography>
                    <Typography sx={{color:"primary",mt:2}}> <Link to="crypto-app/home">Home</Link> <Link to="crypto-app/news">News</Link> <Link to="crypto-app/exchanges">Exchanges</Link></Typography>
                </Box>
            </Box>

        </>
    );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

const App = () => <ThemeProvider theme={darkModeTheme}><MyApp/></ThemeProvider>
export default App