import React from 'react';

import './App.css';
import Header from './layout/Header';
import { theme, ThemeProvider, CSSReset, Box } from '@chakra-ui/core';
import Generator from './Generator';

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
    ...theme,
    breakpoints,
};

function App() {
    return (
        <ThemeProvider theme={newTheme}>
            <CSSReset />
            <Header />
            <Box p={4}>
                <Generator />
            </Box>
        </ThemeProvider>
    );
}

export default App;
