import React from 'react';

import {
  IoListOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import Modal from '../../modal/Modal';

import { Container, ModalItem } from './stylesBottomNav';

interface BottomNavProps {
  fixedNav: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ fixedNav }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container className={fixedNav ? 'nav fixed' : 'nav'}>
      <span>
        <IoSettingsOutline />
      </span>
      <span>
        <IoListOutline />
      </span>
      <span onClick={() => setIsOpen(!isOpen)}>
        <IoPeopleOutline />
      </span>
      {isOpen && (
        <Modal>
          <ModalItem>
            <IoPeopleOutline />
            Arnaldo Domingos
          </ModalItem>

          <ModalItem>
            <IoLogOutOutline />
            Logout
          </ModalItem>
        </Modal>
      )}
    </Container>
  );
};

export default BottomNav;
