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
import LojasModal from '../../../features/lojas/components/modal/index';
import emptyStore from '../../../assets/emptyStore.svg';
import { AppDispatch } from '../../../redux/store';
import { getLojas } from '../../../redux/lojasFeatures/lojasSlice';
import Spinner from '../../../components/spinner/Spinner';
import { useCreateLoja } from '../../../features/lojas/hooks/useCreateLoja';
import SingleLoja from '../../../features/lojas/components/loja/SingleLoja';

const Lojas: React.FC = () => {
  const { user } = useSelector((state: any) => state.user);
  const { lojas, isLoading } = useSelector((state: any) => state.lojas);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedLoja, setSelectedLoja] = React.useState<any>('');
  const { showModal, setShowModal } = useCreateLoja();

  useEffect(() => {
    dispatch(getLojas());
  }, []);

  const handleClick = () => {
    setShowModal(true);
    setSelectedLoja(null);
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
            lojas.map((loja: any) => (
              <SingleLoja
                key={loja.id}
                loja={loja}
                selectedLoja={selectedLoja}
                setSelectedLoja={setSelectedLoja}
                setShowModal={setShowModal}
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

      {showModal && <LojasModal selectedLoja={selectedLoja} />}
    </>
  );
};

export default Lojas;
