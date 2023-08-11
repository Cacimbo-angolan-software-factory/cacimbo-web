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
import { getLojas, deleteLoja } from '../../../redux/lojasFeatures/lojasSlice';
import Spinner from '../../../components/spinner/Spinner';
import Loja from './Loja';
import DeleteModal from './DeleteModal';
import { useLoja } from '../../../features/lojas/hooks';

const Lojas: React.FC = () => {
  const { user } = useSelector((state: any) => state.user);
  const { lojas, isLoading } = useSelector((state: any) => state.lojas);
  const dispatch = useDispatch<AppDispatch>();
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [selectedLoja, setSelectedLoja] = React.useState<any>('');
  const { showModal, setShowModal } = useLoja();

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
              <Loja
                setDeleteModal={setDeleteModal}
                deleteModal={deleteModal}
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

      {showModal && (
        <LojasModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedLoja={selectedLoja}
        />
      )}
    </>
  );
};

export default Lojas;
