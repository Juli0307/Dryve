import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}
