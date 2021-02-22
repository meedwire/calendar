import React from 'react';
import { View } from '../../CalendarComponents';
import { DaysMonth } from '../../Utils';
import { Day } from '../Day';

interface Props {
  index: number;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  rowDays: DaysMonth[];
}

const Days: React.FC<Props> = ({ index, selected, setSelected, rowDays }) => {
  return (
    <View
      style={{ marginTop: index === 0 ? 20 : undefined, marginBottom: 20 }}
      flexDirection="row"
      justifyContent={rowDays.length === 7 ? 'space-evenly' : undefined}
    >
      {rowDays.map(({ day, id }) => (
        <Day
          key={id}
          onSelect={() => setSelected(id)}
          selected={selected === id}
          day={day}
        />
      ))}
    </View>
  );
};

export default Days;
