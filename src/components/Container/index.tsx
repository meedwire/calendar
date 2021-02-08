import React, { useState } from 'react';
import { Divider, Text, View } from '../../CalendarComponents';
import { getDaysMonth } from '../../Utils';
import { DaysBar } from '../DaysBar';
import { Header } from '../Header';

const Container: React.FC = () => {
  const [currMonth] = useState(new Date().getMonth());
  const [currYear] = useState(new Date().getFullYear());
  return (
    <View border={1} size="sm" bgColor="primary">
      <Header />
      <Divider />
      <DaysBar />
      <View>
        {getDaysMonth(currMonth, currYear).map((d) => (
          <Text key={d}>{d}</Text>
        ))}
      </View>
    </View>
  );
};

export { Container };
