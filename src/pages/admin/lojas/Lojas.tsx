import React from 'react';

import { BtnCreate, Container, EmptyStore } from './lojasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import LojasModal from '../../../components/lojas/LojasModal';
import emptyStore from '../../../assets/emptyStore.svg';

const Lojas: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useSelector((state: any) => state.user);
  const { lojas } = useSelector((state: any) => state.lojas);

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

        <div>
          {lojas.length > 0 ? (
            lojas.map((loja: any, index: number) => (
              <div key={index}>
                <h2>{loja.StoreName}</h2>
                <p>{loja.StoreSlogan}</p>
              </div>
            ))
          ) : (
            <EmptyStore>
              <img src={emptyStore} alt='empty' />
              <h2>Não existem lojas disponíveis no momento.</h2>
            </EmptyStore>
          )}
        </div>
      </Container>

      {showModal && (
        <LojasModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Lojas;
