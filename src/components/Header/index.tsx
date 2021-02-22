import React from 'react';
import { Button, Text, View } from '../../CalendarComponents';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface Props {
  month: string;
  year: string;
}

const Header: React.FC<Props> = ({ month, year }) => {
  return (
    <View
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      padding={10}
    >
      <Text fontSize={25} color="#fbed6d">{`${month} de ${year}`}</Text>
      <View flexDirection="row">
        <Button padding={10}>
          <AiFillCaretDown />
        </Button>
        <Button padding={10}>
          <AiFillCaretUp />
        </Button>
      </View>
    </View>
  );
};

export { Header };
