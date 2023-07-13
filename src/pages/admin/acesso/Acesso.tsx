import React, { useEffect } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Button, Container, Overlay } from './AcessoStyles';
import AcessoRoles from '../../../components/acesso/acessoRoles/AcessoRoles';
import ModalRoles from '../../../components/acesso/modalRoles/ModalRoles';
import { IoAddCircleOutline } from 'react-icons/io5';
import ModalAcessoEmpresas from '../../../components/acesso/modalAcessoEmpresas/ModalAcessoEmpresas';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getEmpresasAssociadas } from '../../../redux/empresaFeatures/empresaSlice';

const Acesso: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalEmpresas, setOpenModalEmpresas] = React.useState(false);
  const { rolesList, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const { empresasAssociadas } = useSelector((state: any) => state.empresa);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getEmpresasAssociadas());
  }, []);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <div className='div'>
          <h2>Funções</h2>
          <button onClick={() => setOpenModal(true)}>
            <IoAddCircleOutline />
            Criar função
          </button>
        </div>

        <Button onClick={() => setOpenModalEmpresas(true)}>
          Escolha uma empresa
        </Button>

        <AcessoRoles />
      </Container>

      <ModalRoles openModal={openModal} setOpenModal={setOpenModal} />
      {openModalEmpresas && (
        <ModalAcessoEmpresas
          empresasAssociadas={empresasAssociadas}
          openModalEmpresas={openModalEmpresas}
        />
      )}
      {openModalEmpresas && (
        <Overlay onClick={() => setOpenModalEmpresas(false)} />
      )}
    </>
  );
};

export default Acesso;
