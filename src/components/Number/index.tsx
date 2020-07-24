import React from 'react';
import { View, Text } from '../../CalendarComponents';

// import { Container } from './styles';

interface PropsNumber {
  day: number;
}

const Number: React.FC<PropsNumber> = ({ day }) => {
  return (
    <View>
      <Text>{day}</Text>
    </View>
  );
};

export {Number};
