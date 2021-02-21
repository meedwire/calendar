import React, { useEffect, useState } from 'react';
import { Divider, View, Text } from '../../CalendarComponents';
import { getDaysMonth } from '../../Utils';
import { Day } from '../Day';
import { DaysBar } from '../DaysBar';
import { Header } from '../Header';

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'chunk_inefficient', {
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
    setDays(getDaysMonth(currMonth, currYear).chunk_inefficient(7));
  }, []);

  return (
    <View border={1} size="sm" bgColor="primary">
      <Header />
      <Divider />
      <DaysBar />
      <View>
        {days.map((row, i) => (
          <View
            style={{ marginTop: i === 0 ? 20 : undefined, marginBottom: 20 }}
            key={i.toString()}
            flexDirection="row"
            justifyContent="space-evenly"
          >
            {row.map((day) => (
              <Day
                onSelect={(d) => setSelected(d)}
                selected={selected === day}
                day={day}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export { Container };
