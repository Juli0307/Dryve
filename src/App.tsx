import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { Provider } from 'react-redux';
import store from './store';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}
