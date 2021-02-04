import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Container } from './components/Container';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const Calendar: React.FC = () => {
  return (
    <Provider {...{ store }}>
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </Provider>
  );
};

export default Calendar;
