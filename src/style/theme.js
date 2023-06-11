import { Box, ThemeProvider, createTheme } from '@mui/system';
import * as React from 'react';

const theme = createTheme({
    palette: {
      checked: {
        main: '#11cb5f',
      },
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
    typography: {
      fontFamily: [
        'Abel'
      ].join(','),
    }
  });

export default theme;

