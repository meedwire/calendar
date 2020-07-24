import React, { useState } from 'react';
import { View, Text, Button } from './CalendarComponents';
import { Number as CLNumber } from './components/Number';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { months } from './baseData';

function Calendar() {
  const [currMonth, setCurrMonth] = useState(
    months[Number(new Date().getMonth())].month
  );

  function handleChangeMoreMonth() {
    let currMonthNumber = months.findIndex(({ month }) => month === currMonth);

    console.log(currMonthNumber);

    if (currMonthNumber === 11) {
      currMonthNumber = -1;
    }

    setCurrMonth(months[currMonthNumber + 1].month);
  }

  function handleChangeAnyLessMonth() {
    let currMonthNumber = months.findIndex(({ month }) => month === currMonth);

    if (currMonthNumber === 0) {
      currMonthNumber = 12;
    }

    setCurrMonth(months[currMonthNumber - 1].month);
  }

  return (
    <View className="App">
      <View flexDirection="row">
        <View>
          <Text>{currMonth} de 2020</Text>
        </View>
        <Button onClick={handleChangeAnyLessMonth}>
          <FiChevronUp />
        </Button>
        <Button onClick={handleChangeMoreMonth}>
          <FiChevronDown />
        </Button>
      </View>
      <View flexDirection="row">
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(day => (
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
