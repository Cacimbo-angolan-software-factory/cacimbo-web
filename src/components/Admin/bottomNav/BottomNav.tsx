import React from 'react';
import { logout } from '../../../redux/userFeatures/usersSlice';

import {
  IoListOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import Modal from '../../modal/Modal';

import { Container, ModalItem } from './stylesBottomNav';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  fixedNav: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ fixedNav }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/Login');
  };

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

          <ModalItem onClick={handleLogout}>
            <IoLogOutOutline />
            Logout
          </ModalItem>
        </Modal>
      )}
    </Container>
  );
};

export default BottomNav;
