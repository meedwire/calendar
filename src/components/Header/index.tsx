import React from 'react';
import { Button, Text, View } from '../../CalendarComponents';

const Header: React.FC = () => {
  return (
    <View flexDirection="row">
      <Text>Janeiro de 2021</Text>
      <Button>
        <Text>^</Text>
      </Button>
      <Button>
        <Text>^</Text>
      </Button>
    </View>
  );
};

export { Header };
