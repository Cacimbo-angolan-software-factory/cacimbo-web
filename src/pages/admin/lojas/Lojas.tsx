import React from 'react';

import { BtnCreate, Container } from './lojasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { IoAddCircleOutline } from 'react-icons/io5';

const Lojas: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <BtnCreate>
          <IoAddCircleOutline />
          Criar Loja
        </BtnCreate>

        <h1>hello world</h1>
      </Container>
    </>
  );
};

export default Lojas;
