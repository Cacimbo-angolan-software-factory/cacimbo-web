import React from 'react';

import { Container } from './lojasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';

const Lojas: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <HeaderMobile />
      <Container>
        <h1>Hello world</h1>
      </Container>
    </>
  );
};

export default Lojas;
