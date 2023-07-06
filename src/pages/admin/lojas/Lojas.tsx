import React, { useEffect } from 'react';

import {
  BtnCreate,
  Container,
  EmptyStore,
  LojasContainer,
  SpinnerDiv,
} from './lojasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import LojasModal from '../../../components/lojas/LojasModal';
import emptyStore from '../../../assets/emptyStore.svg';
import { AppDispatch } from '../../../redux/store';
import { getLojas, deleteLoja } from '../../../redux/lojasFeatures/lojasSlice';
import Spinner from '../../../components/spinner/Spinner';
import Loja from './Loja';
import DeleteModal from './DeleteModal';

const Lojas: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useSelector((state: any) => state.user);
  const { lojas, isLoading } = useSelector((state: any) => state.lojas);
  const dispatch = useDispatch<AppDispatch>();
  const [deleteModal, setDeleteModal] = React.useState(false);

  useEffect(() => {
    dispatch(getLojas());
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleDelete = (id: any) => {
    dispatch(deleteLoja(id));

    setTimeout(() => {
      dispatch(getLojas());
      setDeleteModal(false);
    }, 1000);
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

        <LojasContainer>
          {lojas.length > 0 ? (
            lojas
              .slice(0)
              .reverse()
              .map((loja: any, index: number) => (
                <Loja
                  setDeleteModal={setDeleteModal}
                  deleteModal={deleteModal}
                  deleteLoja={handleDelete}
                  key={loja.id}
                  loja={loja}
                />
              ))
          ) : isLoading ? (
            <SpinnerDiv>
              <Spinner />
            </SpinnerDiv>
          ) : (
            <EmptyStore>
              <img src={emptyStore} alt='empty' />
              <h2>Não existem lojas disponíveis no momento.</h2>
            </EmptyStore>
          )}
        </LojasContainer>
      </Container>

      {showModal && (
        <LojasModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Lojas;
