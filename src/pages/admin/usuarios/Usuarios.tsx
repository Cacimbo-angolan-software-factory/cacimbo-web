import React, { useState, useEffect, useRef } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsers } from '../../../redux/userFeatures/usersSlice';
import { Block } from './stylesUsuarios';
import Spinner from '../../../components/spinner/Spinner';
import { RiMore2Fill } from 'react-icons/ri';
import SideBarUsuario from '../../../components/usuarios/SideBarUsuario';
import UserContainer from '../../../components/usuarios/UserContainerSideBar';
import ModalOptions from '../../../components/usuarios/modalOptions/ModalOptions';
import UsersList from '../../../components/usuarios/UsersList';
import PerfisList from '../../../components/usuarios/PerfisList';

const Usuarios: React.FC = () => {
  const { users, isError, isLoading, user } = useSelector(
    (state: any) => state.user
  );
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPerfis, setOpenPerfis] = useState(false);
  const [userSelected, setUserSelected] = useState<any>();
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);
  let modalRef = useRef<any>(null);

  useEffect(() => {
    if (isError) {
      setError('Sem usuários registados');
    }

    dispatch(getUsers(user.user.parceiro_id));
  }, [dispatch, isError]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    let handler = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const handleClickCreate = () => {};

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Block>
        <BtnCreate onClick={handleClickCreate}>Criar usuário</BtnCreate>
        <span onClick={handleOpenModal}>
          <RiMore2Fill />
        </span>
      </Block>

      {openPerfis ? (
        <PerfisList setOpenPerfis={setOpenPerfis} />
      ) : (
        <UsersList
          users={users}
          handleClick={handleClick}
          setUserSelected={setUserSelected}
        />
      )}

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <UserContainer userSelected={userSelected} />
        </SideBarUsuario>
      )}
      {isLoading && <Spinner />}

      {openModal && (
        <ModalOptions modalRef={modalRef} setOpenPerfis={setOpenPerfis} />
      )}
    </>
  );
};

export default Usuarios;
