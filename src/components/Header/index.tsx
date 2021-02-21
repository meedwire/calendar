import React from 'react';
import { Button, Text, View } from '../../CalendarComponents';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <View
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      padding={10}
    >
      <Text fontSize={25} color="#fbed6d">
        Janeiro de 2021
      </Text>
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
