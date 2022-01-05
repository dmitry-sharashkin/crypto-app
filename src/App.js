import * as React from 'react';
import Box from '@mui/material/Box';
import {ThemeProvider, useTheme, createTheme} from '@mui/material/styles';
import {amber, grey, indigo} from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/sidebar";
import {
    Routes,
    Route,
} from "react-router-dom";
import Main from "./components/main";
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
                primary: 'white',
                secondary: amber[800],
            }
            ,
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
                    <Route path='/home' element={<Main/>}/>
                    <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                    <Route path='/exchanges' element={<Exchanges/>}/>
                    <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                    <Route path='/news' element={<News/>}/>
                </Routes>
                <Box sx={{display: 'flex', justifyContent: "center",flexDirection:"column",alignItems:"center"}} component={'footer'}>
                    <Typography component='h3'> Crypto app  </Typography>
                    <Typography> All rights reserved </Typography>
                </Box>
            </Box>

        </>
    );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

const App = () => <ThemeProvider theme={darkModeTheme}><MyApp/></ThemeProvider>
export default App