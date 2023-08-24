import React from 'react';

import { Main } from './tarefasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';

const Tarefas: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <main>
        <h1>hello world</h1>
      </main>
    </>
  );
};

export default Tarefas;
