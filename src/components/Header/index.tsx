import React from "react";
import { View, Text } from "../../CalendarComponents/View";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Header = () => {

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
  )
};

export { Header };
