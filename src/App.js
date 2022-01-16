import * as React from 'react';
import Box from '@mui/material/Box';
import {ThemeProvider, useTheme, createTheme} from '@mui/material/styles';
import {amber, grey, indigo} from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/sidebar";
import Home from "./components/home/Home";
import './index.css'
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CompanyProfile from "./components/CompanyProfile";
import Typography from "@mui/material/Typography";
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";

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
        // text: {
        //     ...(mode === 'dark') && {
        //         secondary: grey[300]
        //
        //     },
        // },
    },
} : null);

function MyApp() {
    // const market = axios.get("https://financialmodelingprep.com/api/v3/stock/list?apikey=4d1255154b11183450dca74fb6df030a").then(response => response.data)
    // console.log(market)
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
                    pl: `${drawerWidth}px`,
                }}
            >
                <CssBaseline/>
                <Sidebar drawerWidth={drawerWidth}/>

                <Box sx={{
                    maxWidth: "1000px",
                    mx: "auto",
                }}>

                    <Routes>
                        <Route path='crypto-app/home' element={<Home/>}/>
                        <Route exact path='crypto-app/' element={<Home/>}/>
                        <Route exact path='crypto-app/profile' element={<CompanyProfile/>}/>
                        <Route path='crypto-app/cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route path='crypto-app/exchanges' element={<Exchanges/>}/>
                        <Route path='crypto-app/crypto/:coinId' element={<CompanyProfile/>}/>
                        <Route path='crypto-app/news' element={<News/>}/>
                    </Routes>

                    <Box sx={{display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center"}}
                         component={'footer'}>
                        <Typography component='h3'> Crypto app </Typography>
                        <Typography> All rights reserved </Typography>
                        <Typography sx={{color: "primary", mt: 2}}> <Link to="crypto-app/home">Home</Link> <Link
                            to="crypto-app/news">News</Link> <Link
                            to="crypto-app/exchanges">Exchanges</Link></Typography>
                    </Box>
                </Box>
            </Box>

        </>
    );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

const App = () => <ThemeProvider theme={darkModeTheme}><MyApp/></ThemeProvider>
export default App