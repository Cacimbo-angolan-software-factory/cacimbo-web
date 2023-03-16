import React from 'react';
import { logout } from '../../../redux/userFeatures/usersSlice';

import {
  IoListOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoBuildOutline,
} from 'react-icons/io5';
import Modal from '../../modal/Modal';

import { Container, ModalItem } from './stylesBottomNav';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  fixedNav: boolean;
  setCriarPermission: (value: boolean) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  fixedNav,
  setCriarPermission,
}) => {
  const [isOpenUser, setIsOpenUser] = React.useState(false);
  const [isOpenSettings, setIsOpenSettings] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/Login');
  };

  const handleSettings = () => {
    setIsOpenSettings(!isOpenSettings);
    if (isOpenSettings) {
      setIsOpenUser(false);
    }
  };

  const handleUser = () => {
    setIsOpenUser(!isOpenUser);
    if (isOpenUser) {
      setIsOpenSettings(false);
    }
  };

  return (
    <Container className={fixedNav ? 'nav fixed' : 'nav'}>
      <span onClick={handleSettings}>
        <IoSettingsOutline />
      </span>
      <span>
        <IoListOutline />
      </span>
      <span onClick={handleUser}>
        <IoPeopleOutline />
      </span>

      {isOpenUser && (
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

      {isOpenSettings && (
        <Modal>
          <ModalItem onClick={() => setCriarPermission(true)}>
            <IoBuildOutline />
            Permissões
          </ModalItem>
        </Modal>
      )}
    </Container>
  );
};

export default BottomNav;
