import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Container } from './components/Container';

const Calendar: React.FC = () => {
  return (
    <Provider {...{ store }}>
      <Container />
    </Provider>
  );
};

export default Calendar;
