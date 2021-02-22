import React, { useEffect, useState } from 'react';
import { Divider, View, Text } from '../../CalendarComponents';
import { getDaysMonth } from '../../Utils';
import { Day } from '../Day';
import Days from '../Days';
import { DaysBar } from '../DaysBar';
import { Header } from '../Header';

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'chunk', {
  value: function (chunkSize) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const array = this;
    // eslint-disable-next-line prefer-spread
    return [].concat.apply(
      [],
      array.map((elem, i) => {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  },
});

const Container: React.FC = () => {
  const [currMonth] = useState(new Date().getMonth());
  const [currYear] = useState(new Date().getFullYear());
  const [selected, setSelected] = useState(
    new Date().toLocaleDateString('pt-br', { day: 'numeric' })
  );
  const [days, setDays] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setDays(getDaysMonth(currMonth, currYear).chunk(7));
  }, []);

  return (
    <View border={1} size="sm" bgColor="primary" padding={50}>
      <Header month="Fevereiro" year="2021" />
      <Divider />
      <DaysBar />
      <View>
        {days.map((rowDays, index) => (
          <Days
            key={index.toString()}
            {...{ selected, setSelected, rowDays, index }}
          />
        ))}
      </View>
    </View>
  );
};

export { Container };
