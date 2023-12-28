// src/theme/withThemeProvider.tsx
import React from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import defaultTheme from './defaultTheme';

interface WithThemeProps {
  theme?: Theme;
}

/**
 * A higher-order component that provides MUI theming.
 * It applies either the provided theme or the default theme to the wrapped component.
 * 
 * @param {React.ComponentType} Component - The component to be wrapped with the theme provider.
 * @returns {React.FC} The component wrapped with a theme provider.
 */
const withThemeProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithThemeProps> => {
  return ({ theme, ...props }: WithThemeProps) => (
    <ThemeProvider theme={theme || defaultTheme}>
      <Component {...(props as P)} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
