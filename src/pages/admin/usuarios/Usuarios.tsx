import React, { useState, useEffect, useRef } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsers, getAllUsers } from '../../../redux/userFeatures/usersSlice';
import { Block, Input } from './stylesUsuarios';
import Spinner from '../../../components/spinner/Spinner';
import SideBarUsuario from '../../../components/usuarios/sideBarsUsuarios/SideBarUsuario';
import UserContainer from '../../../components/usuarios/sideBarsUsuarios/UserContainerSideBar';
import UsersList from '../../../components/usuarios/UsersList';
import CriarUsuarioModal from '../../../components/usuarios/criarUsuario/CriarUsuarioModal';

const Usuarios: React.FC = () => {
  const { users, isError, isLoading, user, allUsers, userEmpresas } =
    useSelector((state: any) => state.user);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [userSelected, setUserSelected] = useState<any>();
  const [criarUser, setCriarUser] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);

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

  // useEffect(() => {
  //   let handler = (event: any) => {
  //     if (!modalRef.current?.contains(event.target)) {
  //       setOpenModal(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handler);

  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   };
  // });

  const handleClickCreate = () => {
    setCriarUser(true);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Block>
        <BtnCreate onClick={handleClickCreate}>Criar usuário</BtnCreate>

        <Input
          onChange={handleSearch}
          value={search}
          type='text'
          placeholder='Pesquise por nome ou email...'
        />
      </Block>

      <UsersList
        allUsers={allUsers}
        users={users}
        handleClick={handleClick}
        setUserSelected={setUserSelected}
        parceiroId={user.user.parceiro_id}
        search={search}
      />

      {criarUser && (
        <CriarUsuarioModal criarUser={criarUser} setCriarUser={setCriarUser} />
      )}

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <UserContainer
            setOpen={setOpen}
            menuRef={menuRef}
            userSelected={userSelected}
          />
        </SideBarUsuario>
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default Usuarios;
