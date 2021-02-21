import React from 'react';
import { Text, View } from '../../CalendarComponents';
import theme from '../../styles/theme';

interface Props {
  day: string;
  selected: boolean;
  onSelect?: (day: string) => void;
}

const Day: React.FC<Props> = ({ day, selected, onSelect }) => {
  return (
    <View
      onClick={() => onSelect && onSelect(day)}
      justifyContent="center"
      alignItems="center"
      height={50}
      style={{
        width: 50,
        backgroundColor: selected ? theme.colors.complementary : undefined,
        boxShadow: selected ? 'rgb(4, 255, 0) 0px 6px 28px -2px' : undefined,
        zIndex: selected ? 99999 : 0,
      }}
    >
      <Text
        style={{
          color: selected ? theme.colors.background : undefined,
          fontWeight: selected ? 'bold' : undefined,
        }}
      >
        {day}
      </Text>
      <View
        style={{
          width: 7,
          height: 7,
          borderRadius: 5,
          backgroundColor: selected
            ? theme.colors.primary
            : theme.colors.complementary,
        }}
      />
    </View>
  );
};

export { Day };
