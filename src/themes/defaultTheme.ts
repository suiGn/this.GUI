// src/theme/defaultTheme.ts
import { createTheme } from '@mui/material/styles';

/**
 * The default theme for the this.gui library.
 * Defines the basic styling such as colors, typography, etc.
 * 
 * @returns {Theme} The default MUI theme with customizations.
 */
const defaultTheme = createTheme({
  // Define your default theme options here
  // For example:
  palette: {
    primary: {
      main: '#556cd6',
    },
    // ...other options
  },
  // ...additional theme options
});

export default defaultTheme;
