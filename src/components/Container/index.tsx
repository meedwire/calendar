import React from 'react';
import { Text, View } from '../../CalendarComponents';
import { Header } from '../Header';

const Container: React.FC = () => {
  return (
    <View border={1} size="sm">
      <Header />
      <Text>Container</Text>
    </View>
  );
};

export { Container };
