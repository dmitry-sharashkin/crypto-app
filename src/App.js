import * as React from 'react';
import Box from '@mui/material/Box';
import {ThemeProvider, useTheme, createTheme} from '@mui/material/styles';
import {amber, grey,indigo} from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/sidebar";
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
            ...(mode === 'light') && {
                    primary: grey[900],
                    secondary: grey[800],
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
            <CssBaseline/>
            <Sidebar drawerWidth={drawerWidth}/>
            <Box mt={10}
                 component="main"
                 sx={{flexGrow: 1, p: 3,}}
            >
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>

            </Box>
        </Box>
    );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

const App = () => <ThemeProvider theme={darkModeTheme}><MyApp/></ThemeProvider>
export default App