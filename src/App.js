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
    return (
        <Box
            sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
                pl: `${drawerWidth}px`
            }}
        >
            <CssBaseline/>
            <Sidebar drawerWidth={drawerWidth}/>
            <Routes>
                <Route path='/home' element={<Main/>}/>
                <Route path='/cryptocurrencies' element={<Main/>}/>
                <Route path='/exchanges' element={<Main/>}/>
                <Route path='/news' element={<Main/>}/>
            </Routes>

        </Box>
    );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

const App = () => <ThemeProvider theme={darkModeTheme}><MyApp/></ThemeProvider>
export default App