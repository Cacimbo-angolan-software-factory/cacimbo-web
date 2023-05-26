import React, { useEffect, useRef } from 'react';
import { logout } from '../../../redux/userFeatures/usersSlice';

import {
  IoListOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoBuildOutline,
  IoPersonAddOutline,
  IoKeyOutline,
} from 'react-icons/io5';
import Modal from '../../modal/Modal';

import { Container, ModalItem } from './stylesBottomNav';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { Link, useNavigate } from 'react-router-dom';

interface BottomNavProps {
  fixedNav: boolean;
  setCriarPermission: (value: boolean) => void;
  setCriarRole: (value: boolean) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  fixedNav,
  setCriarPermission,
  setCriarRole,
}) => {
  const [isOpenUser, setIsOpenUser] = React.useState(false);
  const [isOpenSettings, setIsOpenSettings] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.user);
  let modalRef = useRef<any>(null);

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

  useEffect(() => {
    let handler = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpenSettings(false);
        setIsOpenUser(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

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
        <Modal modalRef={modalRef}>
          <ModalItem>
            <IoPeopleOutline />
            {user.user.name}
          </ModalItem>

          <Link to='/NovaPalavraPasse'>
            <ModalItem>
              <IoKeyOutline />
              Mudar palavra-passe
            </ModalItem>
          </Link>
          <ModalItem onClick={handleLogout}>
            <IoLogOutOutline />
            Logout
          </ModalItem>
        </Modal>
      )}

      {isOpenSettings && (
        <Modal modalRef={modalRef}>
          {user.user.tipo === 'Parceiro' ? null : (
            <ModalItem onClick={() => setCriarPermission(true)}>
              <IoBuildOutline />
              Permissões
            </ModalItem>
          )}
          <ModalItem onClick={() => setCriarRole(true)}>
            <IoPersonAddOutline />
            Funções de usuário
          </ModalItem>
        </Modal>
      )}
    </Container>
  );
};

export default BottomNav;
