import React, { useState, useEffect, useRef } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsers, getAllUsers } from '../../../redux/userFeatures/usersSlice';
import { Block, Button } from './stylesUsuarios';
import Spinner from '../../../components/spinner/Spinner';
import { RiMore2Fill } from 'react-icons/ri';
import SideBarUsuario from '../../../components/usuarios/sideBarsUsuarios/SideBarUsuario';
import UserContainer from '../../../components/usuarios/sideBarsUsuarios/UserContainerSideBar';
import ModalOptions from '../../../components/usuarios/modalOptions/ModalOptions';
import UsersList from '../../../components/usuarios/UsersList';
import PerfisList from '../../../components/usuarios/PerfisList';
import TarefasList from '../../../components/usuarios/TarefasList/TarefasList';
import { IoArrowBackOutline } from 'react-icons/io5';
import CriarUsuarioModal from '../../../components/usuarios/criarUsuario/CriarUsuarioModal';

const Usuarios: React.FC = () => {
  const { users, isError, isLoading, user, allUsers } = useSelector(
    (state: any) => state.user
  );
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPerfis, setOpenPerfis] = useState(false);
  const [openTarefas, setOpenTarefas] = useState(false);
  const [userSelected, setUserSelected] = useState<any>();
  const [criarUser, setCriarUser] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);
  let modalRef = useRef<any>(null);

  useEffect(() => {
    if (isError) {
      setError('Sem usuários registados');
    }

    dispatch(getUsers(user.user.parceiro_id));
  }, [dispatch, isError]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

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

  const handleClickCreate = () => {
    setCriarUser(true);
  };

  const handleClose = () => {
    setOpenPerfis(false);
    setOpenTarefas(false);
  };

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Block>
        <BtnCreate onClick={handleClickCreate}>Criar usuário</BtnCreate>

        {user.user.parceiro_id === 1 ? (
          <span onClick={handleOpenModal}>
            <RiMore2Fill />
          </span>
        ) : null}
      </Block>

      {openPerfis ? (
        <Button onClick={handleClose}>
          <IoArrowBackOutline />
        </Button>
      ) : openTarefas ? (
        <Button onClick={handleClose}>
          <IoArrowBackOutline />
        </Button>
      ) : null}

      {openPerfis ? (
        <PerfisList setOpenPerfis={setOpenPerfis} />
      ) : openTarefas ? (
        <TarefasList />
      ) : (
        <UsersList
          allUsers={allUsers}
          users={users}
          handleClick={handleClick}
          setUserSelected={setUserSelected}
          parceiroId={user.user.parceiro_id}
        />
      )}

      {criarUser && (
        <CriarUsuarioModal criarUser={criarUser} setCriarUser={setCriarUser} />
      )}

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <UserContainer userSelected={userSelected} />
        </SideBarUsuario>
      )}
      {isLoading && <Spinner />}

      {openModal && (
        <ModalOptions
          modalRef={modalRef}
          setOpenTarefas={setOpenTarefas}
          setOpenPerfis={setOpenPerfis}
        />
      )}
    </>
  );
};

export default Usuarios;
