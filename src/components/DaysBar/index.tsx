import React from 'react';
import { Text, View } from '../../CalendarComponents';
import { weekDays } from '../../Utils';

const DaysBar: React.FC = () => {
  return (
    <View flexDirection="row" justifyContent="space-evenly">
      {weekDays.map((d, i) => (
        <View
          key={d + i}
          style={{ width: 50 }}
          height={40}
          justifyContent="center"
          alignItems="center"
        >
          <Text>{d}</Text>
        </View>
      ))}
    </View>
  );
};

export { DaysBar };
