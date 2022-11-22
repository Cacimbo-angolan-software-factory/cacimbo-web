import React from 'react';

import {
  IoListOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import { Container } from './stylesBottomNav';

interface BottomNavProps {
  fixedNav: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ fixedNav }) => {
  return (
    <Container className={fixedNav ? 'nav fixed' : 'nav'}>
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
