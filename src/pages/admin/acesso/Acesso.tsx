import React from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { Container } from './AcessoStyles';
import AcessoRoles from '../../../components/acesso/acessoRoles/AcessoRoles';
import ModalRoles from '../../../components/acesso/modalRoles/ModalRoles';
import { IoAddCircleOutline } from 'react-icons/io5';

const Acesso: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);

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

        <AcessoRoles />
      </Container>

      <ModalRoles openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Acesso;
