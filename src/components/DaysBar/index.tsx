import React from 'react';
import { Text, View } from '../../CalendarComponents';
import { WeekDays } from '../../Utils';

const DaysBar: React.FC = () => {
  return (
    <View flexDirection="row" justifyContent="space-evenly">
      {WeekDays.map((d, i) => (
        <Text key={d + i}>{d}</Text>
      ))}
    </View>
  );
};

export { DaysBar };
