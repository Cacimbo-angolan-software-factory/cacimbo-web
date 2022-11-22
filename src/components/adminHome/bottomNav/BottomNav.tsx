import React from 'react';

import {
  IoListOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import { Container } from './stylesBottomNav';

const BottomNav: React.FC = () => {
  return (
    <Container>
      <span>
        <IoSettingsOutline />
      </span>
      <span>
        <IoListOutline />
      </span>
      <span>
        <IoPeopleOutline />
      </span>
    </Container>
  );
};

export default BottomNav;
