import React, { useState, useEffect, useRef } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsers } from '../../../redux/userFeatures/usersSlice';
import { Block, Container, Div } from './stylesUsuarios';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Spinner from '../../../components/spinner/Spinner';
import { RiMore2Fill } from 'react-icons/ri';
import SideBarUsuario from '../../../components/usuarios/SideBarUsuario';
import UserContainer from '../../../components/usuarios/UserContainerSideBar';
import ModalOptions from '../../../components/usuarios/modalOptions/ModalOptions';

const Usuarios: React.FC = () => {
  const { users, isError, isLoading, user } = useSelector(
    (state: any) => state.user
  );
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelected] = useState<any>();
  const dispatch = useDispatch<AppDispatch>();
  let menuRef = useRef<any>(null);

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

      <Container>
        {users.data &&
          users.data.map((user: any) => (
            <Div key={user.id}>
              <div>
                <IoPersonCircleOutline size={50} />
                <div>
                  <h1>{user.name}</h1>
                  <h3>{user.email}</h3>
                </div>
              </div>

              <span
                onClick={() => {
                  handleClick && handleClick();
                  setUserSelected && setUserSelected(user);
                }}
              >
                <RiMore2Fill />
              </span>
            </Div>
          ))}
      </Container>

      {open && (
        <SideBarUsuario menuRef={menuRef}>
          <UserContainer userSelected={userSelected} />
        </SideBarUsuario>
      )}
      {isLoading && <Spinner />}

      {openModal && <ModalOptions />}
    </>
  );
};

export default Usuarios;
