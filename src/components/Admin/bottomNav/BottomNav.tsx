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
  fixedNav?: boolean;
  setCriarPermission?: (value: boolean) => void;
  setCriarRole?: (value: boolean) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  fixedNav,
  setCriarPermission,
  setCriarRole,
}) => {
  const [isOpenSettings, setIsOpenSettings] = React.useState(false);
  const { user } = useSelector((state: any) => state.user);
  let modalRef = useRef<any>(null);

  const handleSettings = () => {
    setIsOpenSettings(!isOpenSettings);
  };

  useEffect(() => {
    let handler = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpenSettings(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <>
      <Container className={fixedNav ? 'nav fixed' : 'nav'}>
        <span onClick={handleSettings}>
          <IoSettingsOutline />
        </span>
        <span>
          <IoListOutline />
        </span>

        {isOpenSettings && (
          <Modal modalRef={modalRef}>
            {user.user.tipo === 'Parceiro' ? null : (
              <ModalItem
                onClick={() => setCriarPermission && setCriarPermission(true)}
              >
                <IoBuildOutline />
                Permissões
              </ModalItem>
            )}
            <ModalItem onClick={() => setCriarRole && setCriarRole(true)}>
              <IoPersonAddOutline />
              Funções de usuário
            </ModalItem>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default BottomNav;
