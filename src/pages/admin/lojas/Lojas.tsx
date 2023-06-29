import React from 'react';

import { BtnCreate, Container } from './lojasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import LojasModal from '../../../components/lojas/LojasModal';

const Lojas: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useSelector((state: any) => state.user);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Container>
        <BtnCreate onClick={handleClick}>
          <IoAddCircleOutline />
          Criar Loja
        </BtnCreate>

        <h1>hello world</h1>
      </Container>

      {showModal && (
        <LojasModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Lojas;
