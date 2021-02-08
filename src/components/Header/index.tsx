import React from 'react';
import { Button, Text, View } from '../../CalendarComponents';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <View flexDirection="row" justifyContent="space-between">
      <Text>Janeiro de 2021</Text>
      <View flexDirection="row">
        <Button>
          <AiFillCaretDown />
        </Button>
        <Button>
          <AiFillCaretUp />
        </Button>
      </View>
    </View>
  );
};

export { Header };
