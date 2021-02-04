import React, { useState } from 'react';
import { View, Text, Button } from './CalendarComponents';
import { Number as CLNumber } from './components/Number';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Calendar() {
  return (
    <View className="App">
      <View flexDirection="row">
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day) => (
          <View>
            <Text>{day}</Text>
          </View>
        ))}
      </View>
      <View>
        <CLNumber day={1} />
      </View>
    </View>
  );
}

export default Calendar;
